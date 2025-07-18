import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
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

const services = [
  {
    icon: <BuildIcon />,
    title: 'Inspeção Veicular',
    description: 'Laudo completo do estado do veículo realizado por profissionais certificados.',
    price: 'A partir de R$ 199,90',
    action: 'Agendar Inspeção',
  },
  {
    icon: <DirectionsCarIcon />,
    title: 'Test Drive',
    description: 'Experimente o veículo antes de comprar com acompanhamento especializado.',
    price: 'Gratuito',
    action: 'Agendar Test Drive',
  },
  {
    icon: <DescriptionIcon />,
    title: 'Documentação',
    description: 'Assessoria completa para transferência e regularização do veículo.',
    price: 'A partir de R$ 299,90',
    action: 'Solicitar Serviço',
  },
  {
    icon: <LocalShippingIcon />,
    title: 'Transporte',
    description: 'Entrega do veículo em qualquer lugar do Brasil com segurança.',
    price: 'Sob consulta',
    action: 'Solicitar Cotação',
  },
];

export function ServicesSection() {
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
          Serviços Adicionais
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard elevation={1}>
                <IconWrapper>
                  {service.icon}
                </IconWrapper>
                <CardContent sx={{ flexGrow: 1, p: 0 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 3 }}
                  >
                    {service.description}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {service.price}
                  </Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  {service.action}
                </Button>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
}
