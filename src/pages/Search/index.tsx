import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  IconButton,
  Grid,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
  FormControlLabel,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  Close as CloseIcon,
  ThreeSixty,
  KeyboardArrowDown,
  LocationOn,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

interface Vehicle {
  id: string;
  title: string;
  model: string;
  year: string;
  price: number;
  mileage: number;
  location: string;
  images: string[];
  isSponsored: boolean;
  has360: boolean;
  hasInspection: boolean;
}

export function Search() {
  const [filters, setFilters] = useState({
    megaFeira: false,
    vistoriado: false,
    visao360: false,
    superPreco: false,
    trocaTroco: false,
  });
  const [orderBy, setOrderBy] = useState('relevance');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('São Paulo');

  // Mock data - substituir por dados reais da API
  const vehicles: Vehicle[] = [
    {
      id: '1',
      title: 'RENAULT DUSTER',
      model: '1.6 16v Sce Flex Intense Plus X-Tronic',
      year: '2025',
      price: 139890,
      mileage: 0,
      location: 'São Paulo',
      images: ['/duster.jpg'],
      isSponsored: true,
      has360: false,
      hasInspection: false,
    },
    {
      id: '2',
      title: 'BYD SONG PLUS PREMIUM',
      model: '1.5 Dm-i Turbo Híbrido Awd Automático',
      year: '2026',
      price: 299800,
      mileage: 0,
      location: 'São Paulo',
      images: ['/byd.jpg'],
      isSponsored: true,
      has360: true,
      hasInspection: true,
    },
    // Adicionar mais veículos aqui
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 3, mb: 5 }}>
      {/* Breadcrumb e título */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Home &gt; Carros &gt; {selectedLocation}
        </Typography>
        <Typography variant="h5" component="h1" gutterBottom>
          Carros usados, seminovos e novos em {selectedLocation}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Filtros laterais */}
        <Grid item xs={12} md={3}>
          <Paper elevation={0} sx={{ p: 2, border: '1px solid', borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">
                Filtros aplicados
                <Chip
                  size="small"
                  label="1"
                  sx={{ ml: 1, bgcolor: 'primary.main', color: 'white' }}
                />
              </Typography>
              <Button color="primary" onClick={() => {}}>
                Limpar todos
              </Button>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Chip
                label={selectedLocation}
                onDelete={() => {}}
                deleteIcon={<CloseIcon />}
                sx={{ mr: 1, mb: 1 }}
              />
            </Box>

            {/* Tipo de veículo */}
            <Box sx={{ mb: 3 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{ mr: 1, bgcolor: 'grey.900' }}
              >
                Carros
              </Button>
              <Button
                variant="outlined"
                fullWidth
                sx={{ color: 'grey.700', borderColor: 'grey.300' }}
              >
                Motos
              </Button>
            </Box>

            {/* Localização */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Localização
              </Typography>
              <TextField
                fullWidth
                placeholder="Digite sua cidade ou estado"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Interesses */}
            <Typography variant="subtitle2" gutterBottom>
              O que é interessante para você?
            </Typography>
            <List>
              <ListItem disablePadding>
                <FormControlLabel
                  control={
                    <Switch
                      checked={filters.megaFeira}
                      onChange={(e) =>
                        setFilters({ ...filters, megaFeira: e.target.checked })
                      }
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body2">Mega Feirão</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Ofertas e taxas especiais
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
              {/* Adicionar mais filtros aqui */}
            </List>
          </Paper>
        </Grid>

        {/* Lista de veículos */}
        <Grid item xs={12} md={9}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography>
              {vehicles.length.toLocaleString()} anúncios encontrados
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" sx={{ mr: 1 }}>
                Ordenar Por:
              </Typography>
              <Select
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value)}
                size="small"
                sx={{ minWidth: 200 }}
              >
                <MenuItem value="relevance">Mais relevantes</MenuItem>
                <MenuItem value="newer">Mais novos</MenuItem>
                <MenuItem value="older">Mais antigos</MenuItem>
                <MenuItem value="cheaper">Menor preço</MenuItem>
                <MenuItem value="expensive">Maior preço</MenuItem>
              </Select>
            </Box>
          </Box>

          {/* Cards de veículos */}
          <Grid container spacing={2}>
            {vehicles.map((vehicle) => (
              <Grid item xs={12} key={vehicle.id}>
                <Card sx={{ display: 'flex', position: 'relative' }}>
                  {vehicle.isSponsored && (
                    <Chip
                      label="Patrocinado"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        bgcolor: 'background.paper',
                      }}
                    />
                  )}
                  <CardMedia
                    component="img"
                    sx={{ width: 300, height: 200, objectFit: 'cover' }}
                    image={vehicle.images[0]}
                    alt={vehicle.title}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                        }}
                      >
                        <Box>
                          <Typography variant="h6" component="h2">
                            {vehicle.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                          >
                            {vehicle.model}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                            <Typography variant="body2">
                              {vehicle.year}
                            </Typography>
                            <Typography variant="body2">
                              {vehicle.mileage.toLocaleString()} Km
                            </Typography>
                          </Box>
                          <Typography variant="h5" component="div" gutterBottom>
                            {formatPrice(vehicle.price)}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {vehicle.location}
                          </Typography>
                        </Box>
                        <IconButton>
                          <FavoriteBorder />
                        </IconButton>
                      </Box>
                    </CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        px: 2,
                        pb: 2,
                        mt: 'auto',
                      }}
                    >
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ mr: 1 }}
                        onClick={() => {}}
                      >
                        Ver oferta
                      </Button>
                      {vehicle.has360 && (
                        <IconButton
                          sx={{
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1,
                          }}
                        >
                          <ThreeSixty />
                        </IconButton>
                      )}
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
