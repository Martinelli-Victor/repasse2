# Repasse2 - Plataforma de Repasse de Veículos

## Visão Geral
Plataforma web para repasse rápido de veículos seminovos e usados, inspirada no Webmotors. Sistema 100% online para negociação de veículos através de lances, com garantia de pagamento (escrow) e planos de destaque.

### Características Principais
- Sistema de lances com valor mínimo e alvo
- Pagamento de garantia para confirmação de negócio
- Perguntas públicas entre compradores e vendedores
- Planos de destaque para anúncios
- Operação totalmente online sem intermediários

## Tecnologias Utilizadas
- Frontend: React.js com TypeScript
- Backend: Node.js com Express
- Banco de Dados: PostgreSQL
- Cache: Redis
- Upload de Imagens: AWS S3
- Autenticação: JWT + OAuth
- Pagamentos: Integração PIX e Stripe

## Pré-requisitos
- Node.js >= 18
- npm >= 9
- Git

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/repasse2.git
cd repasse2
```

2. Instale as dependências:
```bash
npm install
```

3. Crie o arquivo de variáveis de ambiente:
```bash
cp .env.example .env
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter
- `npm run lint:fix` - Corrige automaticamente os problemas do linter
- `npm run format` - Formata o código com Prettier
- `npm run type-check` - Verifica os tipos do TypeScript

## Estrutura do Projeto

```
src/
  ├── components/     # Componentes reutilizáveis
  ├── pages/         # Páginas da aplicação
  ├── services/      # Serviços e integrações
  ├── hooks/         # Hooks personalizados
  ├── utils/         # Funções utilitárias
  ├── assets/        # Arquivos estáticos
  ├── contexts/      # Contextos do React
  ├── types/         # Tipos e interfaces
  └── styles/        # Estilos globais e temas
```

## Padrões de Código

- Utilize TypeScript para todo código novo
- Siga o guia de estilo do ESLint/Prettier
- Componentes devem ser funcionais e utilizar hooks
- Utilize Material UI para componentes de UI
- Mantenha os componentes pequenos e focados
- Escreva testes para lógica de negócio importante

## Fluxo de Desenvolvimento

1. Crie uma branch para sua feature:
```bash
git checkout -b feature/nome-da-feature
```

2. Faça commits pequenos e descritivos:
```bash
git commit -m "feat: adiciona componente de card de veículo"
```

3. Envie a branch para o repositório:
```bash
git push origin feature/nome-da-feature
```

4. Abra um Pull Request com:
   - Descrição clara das mudanças
   - Screenshots (se aplicável)
   - Testes (se aplicável)
   - Referência à issue relacionada

## Contribuição

1. Fork o projeto
2. Crie sua branch de feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona alguma feature'`)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.