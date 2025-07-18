import React from 'react';
import { AppBar, Toolbar, Container, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Logo from '../../../assets/logo.svg';
import { useTheme as useCustomTheme } from '../../../contexts/ThemeContext';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 0',
  minHeight: '56px',
});

const LogoImage = styled('img')({
  height: '24px',
});

const NavLink = styled(Link)({
  textDecoration: 'none',
});

export const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useCustomTheme();

  // Debug log
  React.useEffect(() => {
    console.log('Theme context:', { isDarkMode, toggleTheme });
  }, [isDarkMode, toggleTheme]);

  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="lg">
        <StyledToolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <NavLink to="/">
              <LogoImage src={Logo} alt="Repasse2" />
            </NavLink>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <NavLink to="/comprar">
                <Button>Comprar</Button>
              </NavLink>
              <NavLink to="/vender">
                <Button>Vender</Button>
              </NavLink>
              <NavLink to="/servicos">
                <Button>Serviços</Button>
              </NavLink>
              <NavLink to="/ajuda">
                <Button>Ajuda</Button>
              </NavLink>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Botão de tema */}
            <IconButton
              onClick={() => {
                console.log('Toggle theme clicked');
                toggleTheme();
              }}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            <NavLink to="/perfil">
              <IconButton>
                <PersonOutlineIcon />
              </IconButton>
            </NavLink>
            <NavLink to="/entrar">
              <Button>Entrar</Button>
            </NavLink>
            <NavLink to="/cadastrar">
              <Button variant="contained" color="primary">
                Cadastrar
              </Button>
            </NavLink>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};
