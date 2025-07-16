import { ReactNode } from 'react';
import { Box, Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              flexGrow: 1,
              fontWeight: 'bold'
            }}
          >
            Repasse2
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={RouterLink} to="/buscar">
              Buscar
            </Button>
            <Button color="inherit" component={RouterLink} to="/anunciar">
              Anunciar
            </Button>
            <Button color="primary" variant="contained" component={RouterLink} to="/entrar">
              Entrar
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Toolbar /> {/* Espaçamento para compensar AppBar fixo */}
      
      <Container component="main" sx={{ flex: 1, py: 4 }}>
        {children}
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Repasse2. Todos os direitos reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}; 