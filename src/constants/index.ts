// Configurações da aplicação
export const APP_NAME = 'Repasse2';
export const APP_DESCRIPTION = 'Marketplace de veículos seminovos e usados';
export const APP_VERSION = '1.0.0';

// Configurações de autenticação
export const AUTH_TOKEN_KEY = '@Repasse2:token';
export const AUTH_USER_KEY = '@Repasse2:user';
export const AUTH_REFRESH_TOKEN_KEY = '@Repasse2:refreshToken';

// Configurações de tema
export const THEME_KEY = '@Repasse2:theme';
export const DEFAULT_THEME = 'light';

// Configurações de paginação
export const DEFAULT_PAGE_SIZE = 12;
export const MAX_PAGE_SIZE = 48;

// Configurações de upload
export const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
export const MIN_IMAGES_PER_VEHICLE = 4;
export const MAX_IMAGES_PER_VEHICLE = 20;

// Configurações de busca
export const MIN_SEARCH_TERM_LENGTH = 3;
export const SEARCH_DEBOUNCE_TIME = 300;

// Configurações de veículos
export const VEHICLE_CONDITIONS = [
  { value: 'used', label: 'Usado' },
  { value: 'certified', label: 'Seminovo' },
] as const;

export const VEHICLE_FEATURES = [
  'Ar condicionado',
  'Direção hidráulica',
  'Vidros elétricos',
  'Travas elétricas',
  'Airbag',
  'Freios ABS',
  'Alarme',
  'Som',
  'Sensor de ré',
  'Câmera de ré',
  'Bancos em couro',
  'Computador de bordo',
  'Piloto automático',
  'Teto solar',
  'Rodas de liga leve',
] as const;

// Configurações de planos
export const SUBSCRIPTION_PLANS = {
  BASIC: {
    id: 'basic',
    name: 'Básico',
    price: 49.90,
    features: [
      'Visibilidade padrão',
      'Até 10 anúncios ativos',
      'Suporte por email',
    ],
  },
  INTERMEDIATE: {
    id: 'intermediate',
    name: 'Intermediário',
    price: 99.90,
    features: [
      'Boost nos resultados',
      'Até 30 anúncios ativos',
      'Selo de destaque',
      'Suporte prioritário',
    ],
  },
  PREMIUM: {
    id: 'premium',
    name: 'Premium',
    price: 199.90,
    features: [
      'Topo da lista',
      'Anúncios ilimitados',
      'Selo "Top Repasse"',
      'Destaque na home',
      'Suporte VIP',
    ],
  },
} as const;

// Configurações de serviços
export const SERVICES = {
  INSPECTION: {
    id: 'inspection',
    name: 'Inspeção Veicular',
    basePrice: 199.90,
  },
  DOCUMENTATION: {
    id: 'documentation',
    name: 'Documentação',
    basePrice: 299.90,
  },
  TRANSPORT: {
    id: 'transport',
    name: 'Transporte',
    pricePerKm: 2.50,
  },
} as const;

// Configurações de pagamento
export const PAYMENT_METHODS = {
  PIX: {
    id: 'pix',
    name: 'PIX',
    description: 'Pagamento instantâneo',
    icon: 'pix',
  },
  CREDIT_CARD: {
    id: 'credit_card',
    name: 'Cartão de Crédito',
    description: 'Pagamento parcelado',
    icon: 'credit_card',
  },
} as const;

// Estados brasileiros
export const STATES = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
] as const;
