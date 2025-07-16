import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  styled,
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(4),
}));

const VehicleCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const VehicleImage = styled(CardMedia)({
  height: 200,
  backgroundSize: 'cover',
});

const PriceText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: '1.5rem',
}));

const CertifiedChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: '#FFFFFF',
  fontWeight: 500,
}));

// Mock data - substituir por dados reais da API
const featuredVehicles = [
  {
    id: 1,
    title: 'Honda Civic EXL',
    year: 2020,
    price: 119900,
    mileage: 45000,
    image: 'https://via.placeholder.com/300x200',
    certified: true,
  },
  {
    id: 2,
    title: 'Toyota Corolla XEI',
    year: 2021,
    price: 129900,
    mileage: 32000,
    image: 'https://via.placeholder.com/300x200',
    certified: true,
  },
  {
    id: 3,
    title: 'Jeep Compass Limited',
    year: 2019,
    price: 139900,
    mileage: 58000,
    image: 'https://via.placeholder.com/300x200',
    certified: false,
  },
];

export const FeaturedSection: React.FC = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <SectionTitle variant="h4" component="h2">
          Veículos em Destaque
        </SectionTitle>

        <Grid container spacing={3}>
          {featuredVehicles.map((vehicle) => (
            <Grid item xs={12} sm={6} md={4} key={vehicle.id}>
              <VehicleCard>
                <VehicleImage
                  image={vehicle.image}
                  title={vehicle.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {vehicle.title}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {vehicle.year} • {vehicle.mileage.toLocaleString()} km
                  </Typography>
                  <PriceText gutterBottom>
                    R$ {vehicle.price.toLocaleString()}
                  </PriceText>
                  {vehicle.certified && (
                    <CertifiedChip
                      icon={<VerifiedIcon />}
                      label="Com Laudo"
                      size="small"
                    />
                  )}
                </CardContent>
              </VehicleCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
