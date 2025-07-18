# Repasse2

Marketplace de veículos seminovos e usados, inspirado no Webmotors.

## Tecnologias

- React
- TypeScript
- Vite
- Material-UI
- React Router
- React Query
- Formik + Yup
- Axios

## Requisitos

- Node.js 18+
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/repasse2.git
cd repasse2
```

2. Instale as dependências:
```bash
npm install
# ou
yarn
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

O aplicativo estará disponível em `http://localhost:5173`.

## Estrutura do Projeto

```
src/
  ├── assets/        # Imagens, fontes e outros recursos estáticos
  ├── components/    # Componentes React reutilizáveis
  ├── contexts/      # Contextos React (tema, auth, etc.)
  ├── hooks/         # Hooks personalizados
  ├── pages/         # Componentes de página
  ├── routes/        # Configuração de rotas
  ├── services/      # Serviços de API
  ├── styles/        # Estilos globais e temas
  ├── types/         # Definições de tipos TypeScript
  ├── utils/         # Funções utilitárias
  └── App.tsx        # Componente raiz
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter
- `npm run test` - Executa os testes

## Funcionalidades

### Implementadas

- [x] Layout responsivo
- [x] Tema claro/escuro
- [x] Página inicial com busca
- [x] Seção de soluções
- [x] Seção de veículos em destaque
- [x] Seção de lojas oficiais
- [x] Seção de serviços

### Em Desenvolvimento

- [ ] Autenticação de usuários
- [ ] Cadastro de veículos
- [ ] Sistema de lances
- [ ] Pagamentos
- [ ] Chat entre usuários
- [ ] Painel do usuário
- [ ] Área administrativa

## Regras de Negócio

### Anúncios

- Apenas veículos seminovos/usados permitidos
- Mínimo de 4 fotos obrigatórias
- Indicação de dívida obrigatória
- Laudo cautelar opcional (gera selo "Com Laudo")
- Valor alvo é secreto (só vendedor vê)
- Lances devem ser >= mínimo
- Histórico de lances público
- Perguntas/respostas públicas e não editáveis
- Garantia obrigatória para match
- Sistema de penalidades por desistência

### Planos

- Básico: Visibilidade padrão
- Intermediário: Boost nos resultados + selo destaque
- Premium: Topo da lista + selo "Top Repasse" + destaque na home
- Pagamentos via PIX ou Cartão
- Plano pago obrigatório para publicar

### Segurança

- Login obrigatório para interações
- Email + senha, Google OAuth ou Facebook OAuth
- Validação de email obrigatória
- Unificação de contas OAuth com email existente
- Dados de contato só após pagamento da garantia
- Sistema segue LGPD
- Logs completos
- Política de moderação ativa
- Avatares fixos (sem fotos pessoais)

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
