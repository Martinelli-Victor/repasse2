import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  styled,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import SellIcon from '@mui/icons-material/Sell';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#666666',
  fontSize: '20px',
  fontWeight: 500,
  marginBottom: theme.spacing(3),
}));

const SolutionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: '#FFF1F3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    fontSize: '24px',
  },
}));

const NewBadge = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: '2px 6px',
  borderRadius: '12px',
  fontSize: '10px',
  marginLeft: '8px',
}));

const solutions = [
  {
    id: 1,
    title: 'Serviços automotivos',
    description: 'Funilaria, manutenção e mais em oficinas perto de você.',
    icon: <BuildIcon />,
    isNew: true,
  },
  {
    id: 2,
    title: 'Vender',
    description: 'Venda fácil e rápido. Anuncie para milhões e feche o melhor negócio.',
    icon: <SellIcon />,
    isNew: false,
  },
  {
    id: 3,
    title: 'Financiamento',
    description: 'Aproveite milhares de ofertas com parcelas que cabem no seu bolso.',
    icon: <AccountBalanceIcon />,
    isNew: false,
  },
];

export const SolutionsSection: React.FC = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#F4F4F4' }}>
      <Container maxWidth="lg">
        <SectionTitle>
          Soluções Repasse2
        </SectionTitle>

        <Grid container spacing={3}>
          {solutions.map((solution) => (
            <Grid item xs={12} md={4} key={solution.id}>
              <SolutionCard elevation={0}>
                <IconWrapper>
                  {solution.icon}
                </IconWrapper>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                  {solution.title}
                  {solution.isNew && <NewBadge>NOVO</NewBadge>}
                </Typography>
                <Typography color="textSecondary">
                  {solution.description}
                </Typography>
              </SolutionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
