export const APP_NAME = 'Repasse2';

export const VEHICLE_BRANDS = [
  { value: 'chevrolet', label: 'Chevrolet' },
  { value: 'fiat', label: 'Fiat' },
  { value: 'ford', label: 'Ford' },
  { value: 'honda', label: 'Honda' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'toyota', label: 'Toyota' },
  { value: 'volkswagen', label: 'Volkswagen' },
] as const;

export const VEHICLE_TRANSMISSIONS = [
  { value: 'manual', label: 'Manual' },
  { value: 'automatic', label: 'Automático' },
] as const;

export const VEHICLE_FUELS = [
  { value: 'flex', label: 'Flex' },
  { value: 'gasoline', label: 'Gasolina' },
  { value: 'ethanol', label: 'Etanol' },
  { value: 'diesel', label: 'Diesel' },
  { value: 'electric', label: 'Elétrico' },
  { value: 'hybrid', label: 'Híbrido' },
] as const;

export const VEHICLE_COLORS = [
  { value: 'black', label: 'Preto' },
  { value: 'white', label: 'Branco' },
  { value: 'silver', label: 'Prata' },
  { value: 'gray', label: 'Cinza' },
  { value: 'red', label: 'Vermelho' },
  { value: 'blue', label: 'Azul' },
  { value: 'brown', label: 'Marrom' },
  { value: 'green', label: 'Verde' },
  { value: 'yellow', label: 'Amarelo' },
  { value: 'orange', label: 'Laranja' },
  { value: 'purple', label: 'Roxo' },
  { value: 'other', label: 'Outra' },
] as const;

export const VEHICLE_STATUS = {
  ACTIVE: 'active',
  SOLD: 'sold',
  INACTIVE: 'inactive',
} as const;

export const PAYMENT_METHODS = {
  PIX: 'pix',
  CREDIT_CARD: 'credit_card',
} as const;

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
} as const;

export const SUBSCRIPTION_STATUS = {
  ACTIVE: 'active',
  EXPIRED: 'expired',
  CANCELLED: 'cancelled',
} as const;

export const PLAN_TYPES = {
  BASIC: 'basic',
  INTERMEDIATE: 'intermediate',
  PREMIUM: 'premium',
} as const;

export const PLAN_FEATURES = {
  [PLAN_TYPES.BASIC]: [
    'Anúncio básico por 30 dias',
    'Até 10 fotos',
    'Visibilidade padrão',
  ],
  [PLAN_TYPES.INTERMEDIATE]: [
    'Anúncio em destaque por 60 dias',
    'Até 15 fotos',
    'Selo de destaque',
    'Melhor posicionamento nos resultados',
    'Estatísticas de visualização',
  ],
  [PLAN_TYPES.PREMIUM]: [
    'Anúncio premium por 90 dias',
    'Até 20 fotos',
    'Selo "Top Repasse"',
    'Posição prioritária nos resultados',
    'Destaque na página inicial',
    'Estatísticas avançadas',
    'Suporte prioritário',
  ],
} as const;

export const PLAN_PRICES = {
  [PLAN_TYPES.BASIC]: 49.90,
  [PLAN_TYPES.INTERMEDIATE]: 99.90,
  [PLAN_TYPES.PREMIUM]: 199.90,
} as const;

export const PLAN_DURATIONS = {
  [PLAN_TYPES.BASIC]: 30,
  [PLAN_TYPES.INTERMEDIATE]: 60,
  [PLAN_TYPES.PREMIUM]: 90,
} as const;

export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
} as const;

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
} as const;

export const API_ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  VEHICLES: {
    LIST: '/vehicles',
    DETAIL: (id: string) => `/vehicles/${id}`,
    CREATE: '/vehicles',
    UPDATE: (id: string) => `/vehicles/${id}`,
    DELETE: (id: string) => `/vehicles/${id}`,
    FAVORITE: (id: string) => `/vehicles/${id}/favorite`,
    FAVORITES: '/vehicles/favorites',
    BIDS: {
      LIST: (id: string) => `/vehicles/${id}/bids`,
      CREATE: (id: string) => `/vehicles/${id}/bids`,
    },
    QUESTIONS: {
      LIST: (id: string) => `/vehicles/${id}/questions`,
      CREATE: (id: string) => `/vehicles/${id}/questions`,
      ANSWER: (vehicleId: string, questionId: string) =>
        `/vehicles/${vehicleId}/questions/${questionId}/answer`,
    },
  },
  PAYMENTS: {
    PLANS: '/plans',
    INTENT: '/payments/intent',
    CONFIRM: (id: string) => `/payments/confirm/${id}`,
    STATUS: (id: string) => `/payments/status/${id}`,
  },
  SUBSCRIPTIONS: {
    LIST: '/subscriptions',
    CANCEL: (id: string) => `/subscriptions/${id}/cancel`,
  },
  ESCROW: {
    LIST: '/payments/escrow',
    REFUND: (id: string) => `/payments/escrow/${id}/refund`,
  },
} as const; 