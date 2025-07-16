import { Box, Container, Typography, Paper, TextField, Button, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/buscar?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/banner-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '300px', md: '400px' },
          display: 'flex',
          alignItems: 'center',
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            color="white"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 4
            }}
          >
            Encontre o veículo ideal para seu negócio
          </Typography>
          
          <Paper
            sx={{
              p: 2,
              maxWidth: 600,
              mx: 'auto',
              display: 'flex',
              gap: 1
            }}
          >
            <TextField
              fullWidth
              placeholder="Busque por marca, modelo ou ano..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ flex: 1 }}
            />
            <Button
              variant="contained"
              size="large"
              startIcon={<SearchIcon />}
              onClick={handleSearch}
            >
              Buscar
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* Seção de Destaques */}
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Destaques Premium
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {/* Grid será preenchido com cards de veículos em destaque */}
        </Grid>

        {/* Seção Como Funciona */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Como Funciona
          </Typography>
          
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  1. Cadastre seu Veículo
                </Typography>
                <Typography>
                  Publique seu veículo com fotos e informações detalhadas
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  2. Receba Lances
                </Typography>
                <Typography>
                  Compradores interessados fazem lances no seu veículo
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  3. Feche Negócio
                </Typography>
                <Typography>
                  Aceite o melhor lance e finalize com segurança
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}; 