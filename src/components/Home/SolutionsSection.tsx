import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  textAlign: 'center',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: 32,
    color: theme.palette.primary.contrastText,
  },
}));

const solutions = [
  {
    icon: <DirectionsCarIcon />,
    title: 'Compra e Venda Segura',
    description: 'Negocie seu veículo com segurança através de nossa plataforma verificada.',
  },
  {
    icon: <GavelIcon />,
    title: 'Sistema de Lances',
    description: 'Faça ofertas e negocie o melhor preço de forma transparente.',
  },
  {
    icon: <SecurityIcon />,
    title: 'Garantia de Procedência',
    description: 'Veículos com documentação verificada e histórico completo.',
  },
  {
    icon: <AccountBalanceIcon />,
    title: 'Financiamento Facilitado',
    description: 'As melhores condições de financiamento para seu veículo.',
  },
];

export function SolutionsSection() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 6 }}
        >
          Soluções completas para sua negociação
        </Typography>

        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledCard elevation={2}>
                <IconWrapper>
                  {solution.icon}
                </IconWrapper>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {solution.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {solution.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
}
