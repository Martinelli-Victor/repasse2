import React from 'react';
import { Box, Container, Typography, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: theme.palette.background.paper,
}));

const StoreAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: `2px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[4],
  },
}));

const stores = [
  {
    name: 'Volvo',
    logo: '/logos/volvo.svg',
  },
  {
    name: 'Movida',
    logo: '/logos/movida.svg',
  },
  {
    name: 'Localiza',
    logo: '/logos/localiza.svg',
  },
  {
    name: 'Unidas',
    logo: '/logos/unidas.svg',
  },
  {
    name: 'Porto Seguro',
    logo: '/logos/porto.svg',
  },
  {
    name: 'Volkswagen',
    logo: '/logos/vw.svg',
  },
];

export function OfficialStores() {
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
          Lojas Oficiais
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {stores.map((store, index) => (
            <Grid
              item
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <StoreAvatar
                src={store.logo}
                alt={`Logo ${store.name}`}
                variant="rounded"
              />
              <Typography
                variant="subtitle2"
                color="text.secondary"
                align="center"
              >
                {store.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
}
