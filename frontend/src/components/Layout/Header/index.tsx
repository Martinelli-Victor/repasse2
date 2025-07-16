import React from 'react';
import { AppBar, Toolbar, Container, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Logo from '../../../assets/logo.svg';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  boxShadow: 'none',
  borderBottom: '1px solid #E5E5E5',
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

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontWeight: 400,
  padding: '6px 12px',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}));

const RegisterButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#FFFFFF',
  textTransform: 'none',
  padding: '6px 16px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const Header: React.FC = () => {
  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="lg">
        <StyledToolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Link to="/">
              <LogoImage src={Logo} alt="Repasse2" />
            </Link>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <NavButton>Comprar</NavButton>
              <NavButton>Vender</NavButton>
              <NavButton>Serviços</NavButton>
              <NavButton>Ajuda</NavButton>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <NavButton>Entrar</NavButton>
            <RegisterButton variant="contained">
              Cadastrar
            </RegisterButton>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};
