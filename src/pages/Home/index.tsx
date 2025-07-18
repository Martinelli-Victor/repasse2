import React, { useState } from 'react';
import { Box, Container, Typography, Paper, TextField, Button, Grid, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import { SolutionsSection } from '../../components/Home/SolutionsSection';
import { OfficialStores } from '../../components/Home/OfficialStores';
import { FeaturedVehicles } from '../../components/Home/FeaturedVehicles';
import { ServicesSection } from '../../components/Home/ServicesSection';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/hero-bg.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '500px',
  display: 'flex',
  alignItems: 'center',
  color: '#FFFFFF',
  marginBottom: theme.spacing(6),
}));

const SearchContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  maxWidth: 800,
  margin: '0 auto',
}));

const VehicleTypeButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  color: isSelected ? theme.palette.primary.contrastText : theme.palette.text.primary,
  backgroundColor: isSelected ? theme.palette.primary.main : theme.palette.background.paper,
  borderRadius: '20px',
  padding: '6px 16px',
  marginRight: theme.spacing(1),
  '&:hover': {
    backgroundColor: isSelected ? theme.palette.primary.dark : theme.palette.action.hover,
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`search-tabpanel-${index}`}
      aria-labelledby={`search-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export function Home() {
  const [searchTab, setSearchTab] = useState(0);
  const [vehicleType, setVehicleType] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implementar lógica de busca
    console.log('Buscar:', { searchTab, vehicleType, searchTerm });
  };

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            align="center"
            sx={{ fontWeight: 700, mb: 4 }}
          >
            Encontre o veículo ideal para você
          </Typography>

          <SearchContainer elevation={3}>
            <Tabs
              value={searchTab}
              onChange={(_, newValue) => setSearchTab(newValue)}
              aria-label="opções de busca"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                },
              }}
            >
              <Tab icon={<DirectionsCarIcon />} label="Comprar carros" />
              <Tab icon={<TwoWheelerIcon />} label="Comprar motos" />
              <Tab icon={<MonetizationOnIcon />} label="Quero vender" />
              <Tab icon={<DescriptionIcon />} label="Quero financiar" />
            </Tabs>

            <TabPanel value={searchTab} index={0}>
              <Box sx={{ mb: 3 }}>
                <VehicleTypeButton
                  isSelected={vehicleType === 'todos'}
                  onClick={() => setVehicleType('todos')}
                >
                  Todos
                </VehicleTypeButton>
                <VehicleTypeButton
                  isSelected={vehicleType === 'seminovos'}
                  onClick={() => setVehicleType('seminovos')}
                >
                  Seminovos
                </VehicleTypeButton>
                <VehicleTypeButton
                  isSelected={vehicleType === 'usados'}
                  onClick={() => setVehicleType('usados')}
                >
                  Usados
                </VehicleTypeButton>
              </Box>

              <form onSubmit={handleSearchSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={9}>
                    <TextField
                      fullWidth
                      placeholder="Digite marca, modelo ou palavra-chave..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      variant="outlined"
                      InputProps={{
                        startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      sx={{ height: '100%' }}
                    >
                      Buscar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </TabPanel>

            <TabPanel value={searchTab} index={1}>
              {/* TODO: Implementar busca de motos */}
              <Typography>Em breve: Busca de motos</Typography>
            </TabPanel>

            <TabPanel value={searchTab} index={2}>
              {/* TODO: Implementar formulário de venda */}
              <Typography>Em breve: Formulário para anunciar seu veículo</Typography>
            </TabPanel>

            <TabPanel value={searchTab} index={3}>
              {/* TODO: Implementar simulação de financiamento */}
              <Typography>Em breve: Simulação de financiamento</Typography>
            </TabPanel>
          </SearchContainer>
        </Container>
      </HeroSection>

      <SolutionsSection />
      <FeaturedVehicles />
      <ServicesSection />
      <OfficialStores />
    </Box>
  );
}
