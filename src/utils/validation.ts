import * as yup from 'yup';
import { isValidCPF, isValidCNPJ, isValidPhone, isValidCEP } from './index';

export const loginSchema = yup.object({
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

export const registerSchema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
  confirmPassword: yup
    .string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([yup.ref('password')], 'As senhas não conferem'),
  document: yup
    .string()
    .required('CPF/CNPJ é obrigatório')
    .test('document', 'CPF/CNPJ inválido', (value) => {
      if (!value) return false;
      const cleaned = value.replace(/\D/g, '');
      return cleaned.length === 11
        ? isValidCPF(cleaned)
        : cleaned.length === 14
        ? isValidCNPJ(cleaned)
        : false;
    }),
  phone: yup
    .string()
    .required('Telefone é obrigatório')
    .test('phone', 'Telefone inválido', (value) =>
      value ? isValidPhone(value) : false
    ),
});

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('E-mail inválido'),
});

export const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
  confirmPassword: yup
    .string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([yup.ref('password')], 'As senhas não conferem'),
});

export const profileSchema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('E-mail inválido'),
  document: yup
    .string()
    .required('CPF/CNPJ é obrigatório')
    .test('document', 'CPF/CNPJ inválido', (value) => {
      if (!value) return false;
      const cleaned = value.replace(/\D/g, '');
      return cleaned.length === 11
        ? isValidCPF(cleaned)
        : cleaned.length === 14
        ? isValidCNPJ(cleaned)
        : false;
    }),
  phone: yup
    .string()
    .required('Telefone é obrigatório')
    .test('phone', 'Telefone inválido', (value) =>
      value ? isValidPhone(value) : false
    ),
  address: yup.object({
    cep: yup
      .string()
      .required('CEP é obrigatório')
      .test('cep', 'CEP inválido', (value) =>
        value ? isValidCEP(value) : false
      ),
    street: yup.string().required('Rua é obrigatória'),
    number: yup.string().required('Número é obrigatório'),
    complement: yup.string(),
    neighborhood: yup.string().required('Bairro é obrigatório'),
    city: yup.string().required('Cidade é obrigatória'),
    state: yup.string().required('Estado é obrigatório'),
  }),
});

export const vehicleSchema = yup.object({
  title: yup.string().required('Título é obrigatório'),
  description: yup
    .string()
    .required('Descrição é obrigatória')
    .min(50, 'Descrição deve ter no mínimo 50 caracteres'),
  brand: yup.string().required('Marca é obrigatória'),
  model: yup.string().required('Modelo é obrigatório'),
  year: yup
    .number()
    .required('Ano é obrigatório')
    .min(1900, 'Ano inválido')
    .max(new Date().getFullYear(), 'Ano inválido'),
  mileage: yup
    .number()
    .required('Quilometragem é obrigatória')
    .min(0, 'Quilometragem inválida'),
  price: yup
    .number()
    .required('Preço é obrigatório')
    .min(1000, 'Preço mínimo é R$ 1.000'),
  transmission: yup
    .string()
    .oneOf(['manual', 'automatic'], 'Câmbio inválido')
    .required('Câmbio é obrigatório'),
  fuel: yup
    .string()
    .oneOf(
      ['flex', 'gasoline', 'ethanol', 'diesel', 'electric', 'hybrid'],
      'Combustível inválido'
    )
    .required('Combustível é obrigatório'),
  color: yup.string().required('Cor é obrigatória'),
  location: yup.string().required('Localização é obrigatória'),
});

export const bidSchema = yup.object({
  amount: yup
    .number()
    .required('Valor é obrigatório')
    .min(1000, 'Valor mínimo é R$ 1.000'),
});

export const questionSchema = yup.object({
  question: yup
    .string()
    .required('Pergunta é obrigatória')
    .min(10, 'Pergunta deve ter no mínimo 10 caracteres')
    .max(500, 'Pergunta deve ter no máximo 500 caracteres'),
});

export const answerSchema = yup.object({
  answer: yup
    .string()
    .required('Resposta é obrigatória')
    .min(5, 'Resposta deve ter no mínimo 5 caracteres')
    .max(500, 'Resposta deve ter no máximo 500 caracteres'),
}); 