import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Typography, Paper, Box } from '@mui/material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Bid {
  amount: number;
  userId: string;
  createdAt: string;
}

interface BidHistoryProps {
  bids: Bid[];
  targetValue?: number;
}

export const BidHistory = ({ bids, targetValue }: BidHistoryProps) => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const formatDate = (date: string) => {
    return format(new Date(date), "dd 'de' MMMM 'às' HH:mm", {
      locale: ptBR,
    });
  };

  const getProgressColor = (amount: number) => {
    if (!targetValue) return 'primary.main';
    const progress = (amount / targetValue) * 100;
    if (progress >= 100) return 'success.main';
    if (progress >= 80) return 'warning.main';
    return 'primary.main';
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Histórico de Lances
      </Typography>

      {bids.length === 0 ? (
        <Typography color="text.secondary" textAlign="center" py={4}>
          Nenhum lance realizado ainda
        </Typography>
      ) : (
        <Timeline>
          {bids.map((bid, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent color="text.secondary">
                {formatDate(bid.createdAt)}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: getProgressColor(bid.amount) }} />
                {index < bids.length - 1 && <TimelineConnector />}
              </TimelineSeparator>

              <TimelineContent>
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    p: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                  }}
                >
                  <Typography variant="subtitle1" component="span">
                    {formatCurrency(bid.amount)}
                  </Typography>
                  {targetValue && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      {((bid.amount / targetValue) * 100).toFixed(1)}% do valor
                      alvo
                    </Typography>
                  )}
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </Paper>
  );
}; 