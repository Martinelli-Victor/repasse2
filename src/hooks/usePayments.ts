import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { paymentsService, CreatePaymentIntent } from '../services/payments';
import { useToast } from './useToast';

export const usePlans = () => {
  return useQuery(['plans'], () => paymentsService.getPlans());
};

export const useCreatePayment = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    (params: CreatePaymentIntent) => paymentsService.createPaymentIntent(params),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['payments']);
      },
      onError: () => {
        toast.error('Erro ao processar pagamento. Tente novamente.');
      },
    }
  );
};

export const useConfirmPayment = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    (intentId: string) => paymentsService.confirmPayment(intentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['payments']);
        queryClient.invalidateQueries(['subscriptions']);
        toast.success('Pagamento confirmado com sucesso!');
      },
      onError: () => {
        toast.error('Erro ao confirmar pagamento. Tente novamente.');
      },
    }
  );
};

export const usePaymentStatus = (intentId: string) => {
  return useQuery(
    ['payment', intentId],
    () => paymentsService.getPaymentStatus(intentId),
    {
      enabled: !!intentId,
      refetchInterval: (data) =>
        data?.status === 'pending' ? 5000 : false,
    }
  );
};

export const useSubscriptions = () => {
  return useQuery(['subscriptions'], () =>
    paymentsService.getUserSubscriptions()
  );
};

export const useCancelSubscription = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    (subscriptionId: string) =>
      paymentsService.cancelSubscription(subscriptionId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['subscriptions']);
        toast.success('Assinatura cancelada com sucesso!');
      },
      onError: () => {
        toast.error('Erro ao cancelar assinatura. Tente novamente.');
      },
    }
  );
};

export const useEscrowPayments = () => {
  return useQuery(['escrow'], () => paymentsService.getEscrowPayments());
};

export const useRefundEscrow = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    (paymentId: string) => paymentsService.refundEscrowPayment(paymentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['escrow']);
        toast.success('Reembolso processado com sucesso!');
      },
      onError: () => {
        toast.error('Erro ao processar reembolso. Tente novamente.');
      },
    }
  );
}; 