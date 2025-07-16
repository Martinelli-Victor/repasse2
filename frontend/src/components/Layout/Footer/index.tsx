import React from 'react';
import { Box, Container, Grid, Typography, Link, styled } from '@mui/material';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#2C2C2C',
  color: '#FFFFFF',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
}));

const FooterTitle = styled(Typography)({
  fontSize: '16px',
  fontWeight: 500,
  marginBottom: '16px',
  color: '#FFFFFF',
});

const FooterLink = styled(Link)({
  color: '#CCCCCC',
  textDecoration: 'none',
  fontSize: '14px',
  display: 'block',
  marginBottom: '8px',
  '&:hover': {
    color: '#FFFFFF',
    textDecoration: 'none',
  },
});

const SupportBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#FFFFFF',
  padding: theme.spacing(1.5),
  textAlign: 'center',
  fontSize: '14px',
}));

export const Footer: React.FC = () => {
  return (
    <>
      <SupportBar>
        Nossos canais de atendimento são 100% digitais. Precisa de ajuda? CLIQUE AQUI
      </SupportBar>

      <FooterContainer>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <FooterTitle>Comprar</FooterTitle>
              <FooterLink href="#">Carros usados</FooterLink>
              <FooterLink href="#">Carros novos</FooterLink>
              <FooterLink href="#">Motos usadas</FooterLink>
              <FooterLink href="#">Motos novas</FooterLink>
              <FooterLink href="#">Vistoriado</FooterLink>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FooterTitle>Vender</FooterTitle>
              <FooterLink href="#">Vender carro</FooterLink>
              <FooterLink href="#">Vender moto</FooterLink>
              <FooterLink href="#">Gerenciar meu anúncio</FooterLink>
              <FooterLink href="#">Plataforma revendedores</FooterLink>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FooterTitle>Serviços</FooterTitle>
              <FooterLink href="#">Serviços automotivos</FooterLink>
              <FooterLink href="#">Tabela FIPE</FooterLink>
              <FooterLink href="#">Financiamento</FooterLink>
              <FooterLink href="#">Seguro veículo</FooterLink>
              <FooterLink href="#">Vistoriado</FooterLink>
              <FooterLink href="#">Plataforma revendedores</FooterLink>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FooterTitle>Institucional</FooterTitle>
              <FooterLink href="#">Canal de ética</FooterLink>
              <FooterLink href="#">Código de conduta</FooterLink>
              <FooterLink href="#">Código defesa do consumidor</FooterLink>
              <FooterLink href="#">Gerenciamento de cookies</FooterLink>
              <FooterLink href="#">Termos de uso e Política de privacidade</FooterLink>
            </Grid>
          </Grid>
        </Container>
      </FooterContainer>
    </>
  );
};
