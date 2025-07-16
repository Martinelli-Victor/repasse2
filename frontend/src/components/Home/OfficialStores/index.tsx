import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  styled,
} from '@mui/material';

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#666666',
  fontSize: '20px',
  fontWeight: 500,
  marginBottom: theme.spacing(3),
}));

const StoreCircle = styled(Box)({
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const StoreLogo = styled('img')({
  maxWidth: '80%',
  maxHeight: '80%',
  objectFit: 'contain',
});

const stores = [
  {
    id: 1,
    name: 'Volvo',
    logo: '/logos/volvo.png',
  },
  {
    id: 2,
    name: 'Movida',
    logo: '/logos/movida.png',
  },
  {
    id: 3,
    name: 'Localiza',
    logo: '/logos/localiza.png',
  },
  {
    id: 4,
    name: 'BYD',
    logo: '/logos/byd.png',
  },
  {
    id: 5,
    name: 'GWM',
    logo: '/logos/gwm.png',
  },
  {
    id: 6,
    name: 'BMW',
    logo: '/logos/bmw.png',
  },
];

export const OfficialStores: React.FC = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#F4F4F4' }}>
      <Container maxWidth="lg">
        <SectionTitle>
          Lojas Oficiais
        </SectionTitle>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {stores.map((store) => (
            <Grid
              item
              key={store.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <StoreCircle>
                <StoreLogo
                  src={store.logo}
                  alt={store.name}
                />
              </StoreCircle>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
