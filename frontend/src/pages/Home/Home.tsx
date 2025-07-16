import { Box, Container, Typography, Paper, TextField, Button, Grid, Tab, Tabs, MenuItem, IconButton, useTheme, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [vehicleType, setVehicleType] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [version, setVersion] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/buscar?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          background: theme.palette.primary.main,
          pt: { xs: 2, md: 4 },
          pb: { xs: 4, md: 6 }
        }}
      >
        <Container maxWidth="lg">
          {/* Tabs de tipo de veículo */}
          <Tabs
            value={vehicleType}
            onChange={(_, value) => setVehicleType(value)}
            sx={{
              mb: 3,
              '& .MuiTab-root': {
                color: 'white',
                opacity: 0.7,
                '&.Mui-selected': {
                  color: 'white',
                  opacity: 1
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: 'white'
              }
            }}
          >
            <Tab
              icon={<DirectionsCarIcon />}
              label="Carros"
              iconPosition="start"
            />
            <Tab
              icon={<TwoWheelerIcon />}
              label="Motos"
              iconPosition="start"
            />
            <Tab
              icon={<LocalShippingIcon />}
              label="Caminhões"
              iconPosition="start"
            />
          </Tabs>

          {/* Formulário de busca */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, md: 3 },
              borderRadius: 1
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <TextField
                  select
                  fullWidth
                  label="Marca"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  SelectProps={{
                    IconComponent: KeyboardArrowDownIcon
                  }}
                >
                  <MenuItem value="toyota">Toyota</MenuItem>
                  <MenuItem value="honda">Honda</MenuItem>
                  <MenuItem value="volkswagen">Volkswagen</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} md={3}>
                <TextField
                  select
                  fullWidth
                  label="Modelo"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  SelectProps={{
                    IconComponent: KeyboardArrowDownIcon
                  }}
                  disabled={!brand}
                >
                  <MenuItem value="corolla">Corolla</MenuItem>
                  <MenuItem value="civic">Civic</MenuItem>
                  <MenuItem value="golf">Golf</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} md={2}>
                <TextField
                  select
                  fullWidth
                  label="Ano"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  SelectProps={{
                    IconComponent: KeyboardArrowDownIcon
                  }}
                >
                  <MenuItem value="2024">2024</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} md={2}>
                <TextField
                  select
                  fullWidth
                  label="Faixa de Preço"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  SelectProps={{
                    IconComponent: KeyboardArrowDownIcon
                  }}
                >
                  <MenuItem value="ate-30000">Até R$ 30.000</MenuItem>
                  <MenuItem value="30000-50000">R$ 30.000 - R$ 50.000</MenuItem>
                  <MenuItem value="acima-50000">Acima de R$ 50.000</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} md={2}>
                <TextField
                  select
                  fullWidth
                  label="Versão"
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                  SelectProps={{
                    IconComponent: KeyboardArrowDownIcon
                  }}
                  disabled={!model}
                >
                  <MenuItem value="basic">Básico</MenuItem>
                  <MenuItem value="mid">Intermediário</MenuItem>
                  <MenuItem value="full">Completo</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleSearch}
                  sx={{
                    height: 56,
                    fontSize: '1.1rem'
                  }}
                >
                  VER OFERTAS
                </Button>
              </Grid>
            </Grid>

            {/* Links de busca rápida */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" gutterBottom sx={{ color: theme.palette.text.secondary }}>
                Busca Rápida
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => navigate('/buscar?q=honda-civic')}
                >
                  Honda Civic
                </Button>
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => navigate('/buscar?q=toyota-corolla')}
                >
                  Toyota Corolla
                </Button>
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => navigate('/buscar?q=volkswagen-golf')}
                >
                  Volkswagen Golf
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Seção de Destaques */}
      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2">
            Destaques
          </Typography>
          <Button
            variant="text"
            color="primary"
            endIcon={<KeyboardArrowDownIcon />}
            onClick={() => navigate('/buscar')}
          >
            Ver todos
          </Button>
        </Box>

        <Grid container spacing={2}>
          {/* Cards de veículos serão renderizados aqui */}
        </Grid>
      </Container>

      {/* Seção de Serviços */}
      <Box sx={{ bgcolor: 'grey.100', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h5" component="h2" gutterBottom>
            Serviços
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Financiamento
                </Typography>
                <Typography color="text.secondary">
                  Simule e compare as melhores opções
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Seguro
                </Typography>
                <Typography color="text.secondary">
                  Proteja seu veículo com as melhores coberturas
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Tabela FIPE
                </Typography>
                <Typography color="text.secondary">
                  Consulte o valor do seu veículo
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Vistoria
                </Typography>
                <Typography color="text.secondary">
                  Laudo completo do estado do veículo
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
