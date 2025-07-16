import { api } from './api';

export interface Vehicle {
  id: string;
  title: string;
  description: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  transmission: 'manual' | 'automatic';
  fuel: 'flex' | 'gasoline' | 'ethanol' | 'diesel' | 'electric' | 'hybrid';
  color: string;
  images: string[];
  location: string;
  hasReport: boolean;
  reportUrl?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  status: 'active' | 'sold' | 'inactive';
  isPremium: boolean;
}

export interface SearchParams {
  term?: string;
  brand?: string;
  model?: string;
  yearStart?: number;
  yearEnd?: number;
  priceMin?: number;
  priceMax?: number;
  transmission?: string;
  fuel?: string;
  color?: string;
  hasReport?: boolean;
  location?: string;
  page?: number;
  limit?: number;
}

export interface SearchResponse {
  items: Vehicle[];
  total: number;
  page: number;
  totalPages: number;
}

export const vehiclesService = {
  async search(params: SearchParams): Promise<SearchResponse> {
    const { data } = await api.get('/vehicles', { params });
    return data;
  },

  async getById(id: string): Promise<Vehicle> {
    const { data } = await api.get(`/vehicles/${id}`);
    return data;
  },

  async create(formData: FormData): Promise<Vehicle> {
    const { data } = await api.post('/vehicles', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },

  async update(id: string, formData: FormData): Promise<Vehicle> {
    const { data } = await api.put(`/vehicles/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/vehicles/${id}`);
  },

  async toggleFavorite(id: string): Promise<void> {
    await api.post(`/vehicles/${id}/favorite`);
  },

  async getFavorites(): Promise<Vehicle[]> {
    const { data } = await api.get('/vehicles/favorites');
    return data;
  },

  async placeBid(id: string, amount: number): Promise<void> {
    await api.post(`/vehicles/${id}/bids`, { amount });
  },

  async getBids(id: string): Promise<{
    amount: number;
    userId: string;
    createdAt: string;
  }[]> {
    const { data } = await api.get(`/vehicles/${id}/bids`);
    return data;
  },

  async getQuestions(id: string): Promise<{
    id: string;
    question: string;
    answer?: string;
    userId: string;
    createdAt: string;
  }[]> {
    const { data } = await api.get(`/vehicles/${id}/questions`);
    return data;
  },

  async askQuestion(id: string, question: string): Promise<void> {
    await api.post(`/vehicles/${id}/questions`, { question });
  },

  async answerQuestion(
    vehicleId: string,
    questionId: string,
    answer: string
  ): Promise<void> {
    await api.post(`/vehicles/${vehicleId}/questions/${questionId}/answer`, {
      answer,
    });
  },
}; 