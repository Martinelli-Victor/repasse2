import { Card, CardMedia, CardContent, Typography, Box, Chip, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

interface VehicleCardProps {
  id: string;
  title: string;
  year: number;
  price: number;
  mileage: number;
  imageUrl: string;
  location: string;
  hasReport?: boolean;
  isPremium?: boolean;
}

export const VehicleCard = ({
  id,
  title,
  year,
  price,
  mileage,
  imageUrl,
  location,
  hasReport = false,
  isPremium = false,
}: VehicleCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const formatMileage = (value: number) => {
    return value.toLocaleString('pt-BR') + ' km';
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-4px)',
          transition: 'transform 0.2s ease-in-out',
          boxShadow: 4,
        },
      }}
    >
      {/* Badges */}
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          display: 'flex',
          gap: 1,
          zIndex: 1,
        }}
      >
        {hasReport && (
          <Chip
            label="Com Laudo"
            color="primary"
            size="small"
            sx={{ backgroundColor: 'success.main', color: 'white' }}
          />
        )}
        {isPremium && (
          <Chip
            label="Top Repasse"
            color="secondary"
            size="small"
            sx={{ backgroundColor: 'secondary.main', color: 'white' }}
          />
        )}
      </Box>

      {/* Botão Favoritar */}
      <Button
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          minWidth: 'auto',
          zIndex: 1,
          color: isFavorite ? 'error.main' : 'white',
        }}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </Button>

      {/* Imagem */}
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
        sx={{
          objectFit: 'cover',
        }}
      />

      {/* Conteúdo */}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to={`/veiculos/${id}`}
          sx={{
            textDecoration: 'none',
            color: 'text.primary',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          {title}
        </Typography>

        <Typography variant="h5" color="primary.main" sx={{ mt: 2, mb: 1 }}>
          {formatPrice(price)}
        </Typography>

        <Box sx={{ mt: 'auto' }}>
          <Typography variant="body2" color="text.secondary">
            {year} • {formatMileage(mileage)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}; 