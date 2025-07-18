import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Chip, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const VehicleCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const CardImageContainer = styled(Box)({
  position: 'relative',
  paddingTop: '56.25%', // 16:9 aspect ratio
});

const StyledCardMedia = styled(CardMedia)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const FavoriteButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 8,
  right: 8,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
}));

const PriceChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  bottom: 8,
  right: 8,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 700,
}));

const LocationChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  bottom: 8,
  left: 8,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
}));

const featuredVehicles = [
  {
    id: 1,
    title: 'Honda Civic EXL',
    year: 2022,
    price: 129900,
    mileage: 15000,
    location: 'São Paulo, SP',
    image: '/images/civic.jpg',
    isFavorite: false,
  },
  {
    id: 2,
    title: 'Toyota Corolla XEI',
    year: 2021,
    price: 119900,
    mileage: 28000,
    location: 'Rio de Janeiro, RJ',
    image: '/images/corolla.jpg',
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Jeep Compass Limited',
    year: 2023,
    price: 189900,
    mileage: 5000,
    location: 'Curitiba, PR',
    image: '/images/compass.jpg',
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Volkswagen T-Cross Highline',
    year: 2022,
    price: 139900,
    mileage: 18000,
    location: 'Belo Horizonte, MG',
    image: '/images/tcross.jpg',
    isFavorite: false,
  },
];

export function FeaturedVehicles() {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const formatMileage = (mileage: number) => {
    return mileage.toLocaleString('pt-BR') + ' km';
  };

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
          Veículos em Destaque
        </Typography>

        <Grid container spacing={4}>
          {featuredVehicles.map((vehicle) => (
            <Grid item xs={12} sm={6} md={3} key={vehicle.id}>
              <VehicleCard elevation={2}>
                <CardImageContainer>
                  <StyledCardMedia
                    image={vehicle.image}
                    title={vehicle.title}
                  />
                  <FavoriteButton size="small">
                    {vehicle.isFavorite ? (
                      <FavoriteIcon color="primary" />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </FavoriteButton>
                  <PriceChip
                    label={formatPrice(vehicle.price)}
                    size="small"
                  />
                  <LocationChip
                    icon={<LocationOnIcon />}
                    label={vehicle.location}
                    size="small"
                  />
                </CardImageContainer>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {vehicle.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {vehicle.year} • {formatMileage(vehicle.mileage)}
                  </Typography>
                </CardContent>
              </VehicleCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
}
