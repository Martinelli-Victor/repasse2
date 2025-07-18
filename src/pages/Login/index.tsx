import { useState } from 'react';
import { useNavigate, useLocation, Link as RouterLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Alert,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Google as GoogleIcon,
  Facebook as FacebookIcon,
} from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Senha é obrigatória'),
});

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, signInWithGoogle, signInWithFacebook } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState({
    email: false,
    google: false,
    facebook: false,
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setError('');
        setLoading(prev => ({ ...prev, email: true }));
        await signIn(values);
        const redirectTo = location.state?.from?.pathname || '/';
        navigate(redirectTo);
      } catch (err) {
        setError('E-mail ou senha inválidos');
      } finally {
        setLoading(prev => ({ ...prev, email: false }));
      }
    },
  });

  const handleGoogleLogin = async () => {
    try {
      setError('');
      setLoading(prev => ({ ...prev, google: true }));
      await signInWithGoogle();
      const redirectTo = location.state?.from?.pathname || '/';
      navigate(redirectTo);
    } catch (err) {
      // Erro já tratado no contexto
    } finally {
      setLoading(prev => ({ ...prev, google: false }));
    }
  };

  const handleFacebookLogin = async () => {
    try {
      setError('');
      setLoading(prev => ({ ...prev, facebook: true }));
      await signInWithFacebook();
      const redirectTo = location.state?.from?.pathname || '/';
      navigate(redirectTo);
    } catch (err) {
      // Erro já tratado no contexto
    } finally {
      setLoading(prev => ({ ...prev, facebook: false }));
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            width: '100%',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
          }}
        >
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Entrar no Repasse2
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleLogin}
              disabled={loading.google}
            >
              {loading.google ? 'Carregando...' : 'Continuar com Google'}
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              onClick={handleFacebookLogin}
              disabled={loading.facebook}
            >
              {loading.facebook ? 'Carregando...' : 'Continuar com Facebook'}
            </Button>
          </Box>

          <Divider sx={{ my: 3 }}>ou</Divider>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
              disabled={loading.email}
            />

            <TextField
              fullWidth
              id="password"
              name="password"
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              margin="normal"
              disabled={loading.email}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      disabled={loading.email}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ mt: 2, mb: 2 }}>
              <Link
                component={RouterLink}
                to="/recuperar-senha"
                variant="body2"
                sx={{ float: 'right' }}
              >
                Esqueceu sua senha?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
              disabled={loading.email}
            >
              {loading.email ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Não tem uma conta?{' '}
            <Link component={RouterLink} to="/cadastrar">
              Cadastre-se
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
