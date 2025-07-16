import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  CircularProgress,
  Tabs,
  Tab,
  TextField,
  Alert,
} from '@mui/material';
import QRCode from 'qrcode.react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { CreatePaymentIntent, PaymentIntent, paymentsService } from '../../services/payments';

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (payment: PaymentIntent) => void;
  type: 'plan' | 'escrow';
  amount: number;
  planId?: string;
  vehicleId?: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`payment-tabpanel-${index}`}
      aria-labelledby={`payment-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const creditCardSchema = yup.object({
  cardNumber: yup.string().required('Número do cartão é obrigatório'),
  cardName: yup.string().required('Nome no cartão é obrigatório'),
  expiryDate: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Data inválida (MM/YY)')
    .required('Data de validade é obrigatória'),
  cvv: yup
    .string()
    .matches(/^[0-9]{3,4}$/, 'CVV inválido')
    .required('CVV é obrigatório'),
});

export const PaymentModal = ({
  open,
  onClose,
  onSuccess,
  type,
  amount,
  planId,
  vehicleId,
}: PaymentModalProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pixData, setPixData] = useState<{
    code: string;
    qrCode: string;
    expiresAt: string;
  } | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setError(null);
  };

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
    },
    validationSchema: creditCardSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        setError(null);

        const paymentIntent = await paymentsService.createPaymentIntent({
          type,
          planId,
          vehicleId,
          paymentMethod: 'credit_card',
          amount,
        });

        // Aqui seria integrado com o processador de pagamentos
        const confirmedPayment = await paymentsService.confirmPayment(
          paymentIntent.id
        );

        onSuccess(confirmedPayment);
        onClose();
      } catch (err) {
        setError('Falha ao processar pagamento. Tente novamente.');
      } finally {
        setLoading(false);
      }
    },
  });

  const handlePixPayment = async () => {
    try {
      setLoading(true);
      setError(null);

      const paymentIntent = await paymentsService.createPaymentIntent({
        type,
        planId,
        vehicleId,
        paymentMethod: 'pix',
        amount,
      });

      setPixData({
        code: paymentIntent.pixCode!,
        qrCode: paymentIntent.pixQrCode!,
        expiresAt: paymentIntent.pixExpiresAt!,
      });

      // Inicia polling para verificar status do pagamento
      const checkPaymentStatus = async () => {
        const status = await paymentsService.getPaymentStatus(paymentIntent.id);
        if (status.status === 'completed') {
          onSuccess(status);
          onClose();
        } else if (status.status === 'failed') {
          setError('Pagamento não realizado. Tente novamente.');
        } else {
          setTimeout(checkPaymentStatus, 5000); // Verifica a cada 5 segundos
        }
      };

      setTimeout(checkPaymentStatus, 5000);
    } catch (err) {
      setError('Falha ao gerar código PIX. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const formatAmount = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Pagamento - {formatAmount(amount)}
      </DialogTitle>

      <DialogContent>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="PIX" />
          <Tab label="Cartão de Crédito" />
        </Tabs>

        <TabPanel value={activeTab} index={0}>
          {loading ? (
            <Box display="flex" justifyContent="center" p={3}>
              <CircularProgress />
            </Box>
          ) : pixData ? (
            <Box textAlign="center">
              <Typography variant="subtitle1" gutterBottom>
                Escaneie o QR Code ou copie o código PIX
              </Typography>
              <Box sx={{ my: 2 }}>
                <QRCode value={pixData.qrCode} size={200} />
              </Box>
              <TextField
                fullWidth
                value={pixData.code}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <Button
                      onClick={() => navigator.clipboard.writeText(pixData.code)}
                    >
                      Copiar
                    </Button>
                  ),
                }}
                sx={{ mb: 2 }}
              />
              <Typography variant="caption" color="text.secondary">
                Expira em:{' '}
                {new Date(pixData.expiresAt).toLocaleString('pt-BR')}
              </Typography>
            </Box>
          ) : (
            <Box textAlign="center" p={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={handlePixPayment}
                size="large"
              >
                Gerar QR Code PIX
              </Button>
            </Box>
          )}
        </TabPanel>

        <TabPanel value={activeTab} index={1}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              name="cardNumber"
              label="Número do Cartão"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.cardNumber && Boolean(formik.errors.cardNumber)
              }
              helperText={formik.touched.cardNumber && formik.errors.cardNumber}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              name="cardName"
              label="Nome no Cartão"
              value={formik.values.cardName}
              onChange={formik.handleChange}
              error={formik.touched.cardName && Boolean(formik.errors.cardName)}
              helperText={formik.touched.cardName && formik.errors.cardName}
              sx={{ mb: 2 }}
            />
            <Box display="flex" gap={2}>
              <TextField
                name="expiryDate"
                label="Validade (MM/YY)"
                value={formik.values.expiryDate}
                onChange={formik.handleChange}
                error={
                  formik.touched.expiryDate && Boolean(formik.errors.expiryDate)
                }
                helperText={
                  formik.touched.expiryDate && formik.errors.expiryDate
                }
                sx={{ flex: 1 }}
              />
              <TextField
                name="cvv"
                label="CVV"
                value={formik.values.cvv}
                onChange={formik.handleChange}
                error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                helperText={formik.touched.cvv && formik.errors.cvv}
                sx={{ width: 120 }}
              />
            </Box>
          </form>
        </TabPanel>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancelar
        </Button>
        {activeTab === 1 && (
          <Button
            variant="contained"
            onClick={() => formik.handleSubmit()}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Pagar'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}; 