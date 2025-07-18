import { VEHICLE_STATUS, PAYMENT_STATUS, SUBSCRIPTION_STATUS, USER_ROLES } from '../constants';

export type VehicleStatus = typeof VEHICLE_STATUS[keyof typeof VEHICLE_STATUS];
export type PaymentStatus = typeof PAYMENT_STATUS[keyof typeof PAYMENT_STATUS];
export type SubscriptionStatus = typeof SUBSCRIPTION_STATUS[keyof typeof SUBSCRIPTION_STATUS];
export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Vehicle {
  id: string;
  title: string;
  description: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  type: 'car' | 'motorcycle';
  condition: 'new' | 'used';
  location: {
    city: string;
    state: string;
  };
  features: string[];
  images: string[];
  seller: {
    id: string;
    name: string;
    type: 'private' | 'dealer';
    rating?: number;
  };
  status: 'active' | 'sold' | 'inactive';
  views: number;
  favorites: number;
  hasDebt: boolean;
  hasInspectionReport?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Bid {
  id: string;
  vehicleId: string;
  userId: string;
  amount: number;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  duration: number; // em dias
  type: 'basic' | 'intermediate' | 'premium';
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate: Date;
  autoRenew: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface InspectionReport {
  id: string;
  vehicleId: string;
  inspectorId: string;
  date: Date;
  status: 'scheduled' | 'completed' | 'cancelled';
  items: {
    category: string;
    name: string;
    condition: 'good' | 'regular' | 'bad';
    comments?: string;
  }[];
  photos: string[];
  finalScore: number;
  recommendations: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  type: 'subscription' | 'inspection' | 'service';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  method: 'pix' | 'credit_card';
  referenceId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  vehicleId?: string;
  content: string;
  read: boolean;
  createdAt: Date;
}

export interface Review {
  id: string;
  userId: string;
  targetId: string;
  type: 'seller' | 'buyer';
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface SearchFilters {
  brand?: string;
  model?: string;
  yearMin?: number;
  yearMax?: number;
  priceMin?: number;
  priceMax?: number;
  mileageMin?: number;
  mileageMax?: number;
  condition?: 'new' | 'used' | 'all';
  location?: {
    city?: string;
    state?: string;
    radius?: number;
  };
  features?: string[];
  sort?: 'price_asc' | 'price_desc' | 'date_desc' | 'mileage_asc';
  limit?: number;
  page?: number;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  totalPages: number;
}

export interface ApiError extends Error {
  response?: {
    data: ErrorResponse;
    status: number;
  };
}

export interface SelectOption {
  value: string;
  label: string;
}
