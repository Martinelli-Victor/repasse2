import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  Divider,
  Paper,
  Alert,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useAuth } from '../../contexts/AuthContext';

interface Question {
  id: string;
  question: string;
  answer?: string;
  userId: string;
  createdAt: string;
}

interface QuestionsProps {
  vehicleId: string;
  questions: Question[];
  onAskQuestion: (question: string) => Promise<void>;
  onAnswerQuestion: (questionId: string, answer: string) => Promise<void>;
  isOwner: boolean;
}

const questionSchema = yup.object({
  question: yup
    .string()
    .required('A pergunta é obrigatória')
    .min(10, 'A pergunta deve ter no mínimo 10 caracteres')
    .max(500, 'A pergunta deve ter no máximo 500 caracteres'),
});

const answerSchema = yup.object({
  answer: yup
    .string()
    .required('A resposta é obrigatória')
    .min(5, 'A resposta deve ter no mínimo 5 caracteres')
    .max(500, 'A resposta deve ter no máximo 500 caracteres'),
});

export const Questions = ({
  vehicleId,
  questions,
  onAskQuestion,
  onAnswerQuestion,
  isOwner,
}: QuestionsProps) => {
  const { user, isAuthenticated } = useAuth();
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const questionFormik = useFormik({
    initialValues: {
      question: '',
    },
    validationSchema: questionSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await onAskQuestion(values.question);
        resetForm();
        setError(null);
      } catch (err) {
        setError('Não foi possível enviar sua pergunta. Tente novamente.');
      }
    },
  });

  const answerFormik = useFormik({
    initialValues: {
      answer: '',
    },
    validationSchema: answerSchema,
    onSubmit: async (values, { resetForm }) => {
      if (!activeQuestionId) return;

      try {
        await onAnswerQuestion(activeQuestionId, values.answer);
        resetForm();
        setActiveQuestionId(null);
        setError(null);
      } catch (err) {
        setError('Não foi possível enviar sua resposta. Tente novamente.');
      }
    },
  });

  const formatDate = (date: string) => {
    return format(new Date(date), "dd 'de' MMMM 'às' HH:mm", {
      locale: ptBR,
    });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Perguntas e Respostas
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {isAuthenticated && !isOwner && (
        <Box sx={{ mb: 4 }}>
          <form onSubmit={questionFormik.handleSubmit}>
            <TextField
              fullWidth
              multiline
              rows={3}
              name="question"
              label="Faça uma pergunta"
              value={questionFormik.values.question}
              onChange={questionFormik.handleChange}
              error={
                questionFormik.touched.question &&
                Boolean(questionFormik.errors.question)
              }
              helperText={
                questionFormik.touched.question && questionFormik.errors.question
              }
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={questionFormik.isSubmitting}
            >
              Enviar Pergunta
            </Button>
          </form>
        </Box>
      )}

      {!isAuthenticated && (
        <Alert severity="info" sx={{ mb: 4 }}>
          Faça login para fazer perguntas sobre este veículo
        </Alert>
      )}

      <List>
        {questions.length === 0 ? (
          <Typography color="text.secondary" textAlign="center" py={4}>
            Nenhuma pergunta feita ainda
          </Typography>
        ) : (
          questions.map((question, index) => (
            <Box key={question.id}>
              <ListItem
                sx={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  py: 2,
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <Typography variant="body1">{question.question}</Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    component="div"
                  >
                    Perguntado em {formatDate(question.createdAt)}
                  </Typography>
                </Box>

                {question.answer ? (
                  <Box
                    sx={{
                      width: '100%',
                      mt: 2,
                      pl: 2,
                      borderLeft: 2,
                      borderColor: 'primary.main',
                    }}
                  >
                    <Typography variant="body1">{question.answer}</Typography>
                  </Box>
                ) : isOwner ? (
                  <Box sx={{ width: '100%', mt: 2 }}>
                    {activeQuestionId === question.id ? (
                      <form onSubmit={answerFormik.handleSubmit}>
                        <TextField
                          fullWidth
                          multiline
                          rows={2}
                          name="answer"
                          label="Sua resposta"
                          value={answerFormik.values.answer}
                          onChange={answerFormik.handleChange}
                          error={
                            answerFormik.touched.answer &&
                            Boolean(answerFormik.errors.answer)
                          }
                          helperText={
                            answerFormik.touched.answer &&
                            answerFormik.errors.answer
                          }
                          sx={{ mb: 1 }}
                        />
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="small"
                            disabled={answerFormik.isSubmitting}
                          >
                            Responder
                          </Button>
                          <Button
                            size="small"
                            onClick={() => setActiveQuestionId(null)}
                          >
                            Cancelar
                          </Button>
                        </Box>
                      </form>
                    ) : (
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => setActiveQuestionId(question.id)}
                      >
                        Responder
                      </Button>
                    )}
                  </Box>
                ) : null}
              </ListItem>
              {index < questions.length - 1 && <Divider />}
            </Box>
          ))
        )}
      </List>
    </Paper>
  );
}; 