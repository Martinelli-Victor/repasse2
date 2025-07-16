import { AppBar, Toolbar, Container, Button, Box, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export function Header() {
  const { user, signOut } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMobileMenuAnchorEl(null);
  };

  return (
    <AppBar position="sticky" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 64, justifyContent: 'space-between' }}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenu}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <RouterLink to="/">
            <Box
              component="img"
              src="/logo.svg"
              alt="Repasse2"
              sx={{ height: 32 }}
            />
          </RouterLink>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                component={RouterLink}
                to="/comprar"
                color="inherit"
                sx={{ fontWeight: 700 }}
              >
                Comprar
              </Button>
              <Button
                component={RouterLink}
                to="/vender"
                color="inherit"
                sx={{ fontWeight: 700 }}
              >
                Vender
              </Button>
              <Button
                component={RouterLink}
                to="/servicos"
                color="inherit"
                sx={{ fontWeight: 700 }}
              >
                Serviços
              </Button>
              <Button
                component={RouterLink}
                to="/ajuda"
                color="inherit"
                sx={{ fontWeight: 700 }}
              >
                Ajuda
              </Button>
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {user ? (
              <>
                <Button
                  component={RouterLink}
                  to="/anunciar"
                  variant="contained"
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    display: { xs: 'none', sm: 'flex' }
                  }}
                >
                  Anunciar
                </Button>
                <IconButton
                  color="inherit"
                  onClick={handleMenu}
                  sx={{ ml: { xs: 0, sm: 1 } }}
                >
                  <PersonOutlineIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Button
                  component={RouterLink}
                  to="/entrar"
                  color="inherit"
                  sx={{
                    fontWeight: 700,
                    display: { xs: 'none', sm: 'flex' }
                  }}
                >
                  Entrar
                </Button>
                <Button
                  component={RouterLink}
                  to="/cadastrar"
                  variant="contained"
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    display: { xs: 'none', sm: 'flex' }
                  }}
                >
                  Cadastrar
                </Button>
                <IconButton
                  color="inherit"
                  onClick={handleMenu}
                  sx={{ display: { sm: 'none' } }}
                >
                  <PersonOutlineIcon />
                </IconButton>
              </>
            )}
          </Box>

          {/* Menu do usuário */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {user ? (
              [
                <MenuItem key="minha-conta" component={RouterLink} to="/minha-conta" onClick={handleClose}>
                  Minha Conta
                </MenuItem>,
                <MenuItem key="meus-anuncios" component={RouterLink} to="/meus-anuncios" onClick={handleClose}>
                  Meus Anúncios
                </MenuItem>,
                <MenuItem key="favoritos" component={RouterLink} to="/favoritos" onClick={handleClose}>
                  Favoritos
                </MenuItem>,
                <MenuItem key="sair" onClick={() => { signOut(); handleClose(); }}>
                  Sair
                </MenuItem>,
              ]
            ) : (
              [
                <MenuItem key="entrar" component={RouterLink} to="/entrar" onClick={handleClose}>
                  Entrar
                </MenuItem>,
                <MenuItem key="cadastrar" component={RouterLink} to="/cadastrar" onClick={handleClose}>
                  Cadastrar
                </MenuItem>,
              ]
            )}
          </Menu>

          {/* Menu mobile */}
          <Menu
            anchorEl={mobileMenuAnchorEl}
            open={Boolean(mobileMenuAnchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem component={RouterLink} to="/comprar" onClick={handleClose}>
              Comprar
            </MenuItem>
            <MenuItem component={RouterLink} to="/vender" onClick={handleClose}>
              Vender
            </MenuItem>
            <MenuItem component={RouterLink} to="/servicos" onClick={handleClose}>
              Serviços
            </MenuItem>
            <MenuItem component={RouterLink} to="/ajuda" onClick={handleClose}>
              Ajuda
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
