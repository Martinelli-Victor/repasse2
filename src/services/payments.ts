import { api } from './api';

export interface Plan {
  id: string;
  name: 'basic' | 'intermediate' | 'premium';
  title: string;
  description: string;
  features: string[];
  price: number;
  duration: number; // em dias
}

export interface PaymentIntent {
  id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  paymentMethod: 'pix' | 'credit_card';
  pixCode?: string;
  pixQrCode?: string;
  pixExpiresAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePaymentIntent {
  type: 'plan' | 'escrow';
  planId?: string;
  vehicleId?: string;
  paymentMethod: 'pix' | 'credit_card';
  amount: number;
}

export const paymentsService = {
  async getPlans(): Promise<Plan[]> {
    const { data } = await api.get('/plans');
    return data;
  },

  async createPaymentIntent(
    params: CreatePaymentIntent
  ): Promise<PaymentIntent> {
    const { data } = await api.post('/payments/intent', params);
    return data;
  },

  async confirmPayment(intentId: string): Promise<PaymentIntent> {
    const { data } = await api.post(`/payments/confirm/${intentId}`);
    return data;
  },

  async getPaymentStatus(intentId: string): Promise<PaymentIntent> {
    const { data } = await api.get(`/payments/status/${intentId}`);
    return data;
  },

  async getUserSubscriptions(): Promise<{
    id: string;
    planId: string;
    status: 'active' | 'expired' | 'cancelled';
    startDate: string;
    endDate: string;
  }[]> {
    const { data } = await api.get('/subscriptions');
    return data;
  },

  async cancelSubscription(subscriptionId: string): Promise<void> {
    await api.post(`/subscriptions/${subscriptionId}/cancel`);
  },

  async getEscrowPayments(): Promise<{
    id: string;
    vehicleId: string;
    amount: number;
    status: 'pending' | 'completed' | 'refunded';
    createdAt: string;
  }[]> {
    const { data } = await api.get('/payments/escrow');
    return data;
  },

  async refundEscrowPayment(paymentId: string): Promise<void> {
    await api.post(`/payments/escrow/${paymentId}/refund`);
  },
}; 