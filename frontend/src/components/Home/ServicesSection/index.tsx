import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  styled,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SecurityIcon from '@mui/icons-material/Security';
import BarChartIcon from '@mui/icons-material/BarChart';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.2s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    fontSize: '3rem',
    color: theme.palette.primary.main,
  },
}));

const services = [
  {
    id: 1,
    title: 'Financiamento',
    description: 'Simule e compare as melhores opções de financiamento para seu veículo',
    icon: <AttachMoneyIcon />,
  },
  {
    id: 2,
    title: 'Seguro',
    description: 'Proteja seu investimento com as melhores coberturas do mercado',
    icon: <SecurityIcon />,
  },
  {
    id: 3,
    title: 'Tabela FIPE',
    description: 'Consulte o valor de mercado do seu veículo na tabela FIPE',
    icon: <BarChartIcon />,
  },
  {
    id: 4,
    title: 'Vistoria',
    description: 'Laudo cautelar completo para sua segurança na negociação',
    icon: <VerifiedUserIcon />,
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            marginBottom: 4,
          }}
        >
          Nossos Serviços
        </Typography>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.id}>
              <ServiceCard elevation={1}>
                <IconWrapper>
                  {service.icon}
                </IconWrapper>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography color="textSecondary">
                  {service.description}
                </Typography>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
