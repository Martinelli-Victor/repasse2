import React from 'react';
import { Box, Container, Grid, Typography, Link, styled, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '../../../contexts/ThemeContext';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1C1C1C' : '#1C1C1C',
  color: '#FFFFFF',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
}));

const FooterTitle = styled(Typography)({
  fontSize: '16px',
  fontWeight: 700,
  marginBottom: '20px',
  color: '#FFFFFF',
});

const FooterLink = styled(Link)({
  color: '#999999',
  textDecoration: 'none',
  fontSize: '14px',
  display: 'block',
  marginBottom: '12px',
  '&:hover': {
    color: '#FFFFFF',
    textDecoration: 'none',
  },
});

const SocialContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
  marginTop: '24px',
});

const SocialButton = styled(IconButton)({
  color: '#999999',
  '&:hover': {
    color: '#FFFFFF',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const SupportBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#FFFFFF',
  padding: theme.spacing(1.5),
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: 500,
}));

const BottomBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#141414' : '#141414',
  color: '#999999',
  padding: '24px 0',
  fontSize: '12px',
  marginTop: '48px',
}));

export const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <SupportBar>
        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
          Nossos canais de atendimento são 100% digitais. Precisa de ajuda? CLIQUE AQUI
        </Link>
      </SupportBar>

      <FooterContainer>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <FooterTitle>Para você</FooterTitle>
              <FooterLink href="#">Carros usados</FooterLink>
              <FooterLink href="#">Carros novos</FooterLink>
              <FooterLink href="#">Motos usadas</FooterLink>
              <FooterLink href="#">Motos novas</FooterLink>
              <FooterLink href="#">Tabela FIPE</FooterLink>
              <FooterLink href="#">Catálogo 0km</FooterLink>
              <FooterLink href="#">Vender meu carro</FooterLink>
              <FooterLink href="#">Financiamento</FooterLink>
              <FooterLink href="#">Seguro veículo</FooterLink>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FooterTitle>Para Lojas e Vendedores</FooterTitle>
              <FooterLink href="#">Planos para revenda</FooterLink>
              <FooterLink href="#">Planos para particulares</FooterLink>
              <FooterLink href="#">Gerenciar meus anúncios</FooterLink>
              <FooterLink href="#">Vender meu estoque</FooterLink>
              <FooterLink href="#">API de integração</FooterLink>
              <FooterLink href="#">Avalie seu estoque</FooterLink>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FooterTitle>Institucional</FooterTitle>
              <FooterLink href="#">Sobre o Repasse2</FooterLink>
              <FooterLink href="#">Trabalhe conosco</FooterLink>
              <FooterLink href="#">Canal de ética</FooterLink>
              <FooterLink href="#">Código de conduta</FooterLink>
              <FooterLink href="#">Política de privacidade</FooterLink>
              <FooterLink href="#">Termos de uso</FooterLink>
              <FooterLink href="#">Política de cookies</FooterLink>
              <FooterLink href="#">Mapa do site</FooterLink>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FooterTitle>Siga o Repasse2</FooterTitle>
              <Typography variant="body2" color="#999999" sx={{ mb: 2 }}>
                Acompanhe as novidades do mundo automotivo
              </Typography>
              <SocialContainer>
                <SocialButton aria-label="Facebook">
                  <FacebookIcon />
                </SocialButton>
                <SocialButton aria-label="Instagram">
                  <InstagramIcon />
                </SocialButton>
                <SocialButton aria-label="YouTube">
                  <YouTubeIcon />
                </SocialButton>
                <SocialButton aria-label="LinkedIn">
                  <LinkedInIcon />
                </SocialButton>
              </SocialContainer>
            </Grid>
          </Grid>

          <BottomBar>
            <Container maxWidth="lg">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" color="inherit">
                    © {new Date().getFullYear()} Repasse2 - Todos os direitos reservados
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ textAlign: { md: 'right' } }}>
                  <Typography variant="body2" color="inherit">
                    CNPJ: XX.XXX.XXX/0001-XX | Av. Exemplo, 1000 - São Paulo, SP
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </BottomBar>
        </Container>
      </FooterContainer>
    </>
  );
};
