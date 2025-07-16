import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { PublicOnlyRoute } from './PublicOnlyRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const Search = lazy(() => import('../pages/Search/Search'));
const VehicleDetails = lazy(() => import('../pages/VehicleDetails/VehicleDetails'));
const CreateListing = lazy(() => import('../pages/CreateListing/CreateListing'));
const Login = lazy(() => import('../pages/Auth/Login'));
const Register = lazy(() => import('../pages/Auth/Register'));
const ForgotPassword = lazy(() => import('../pages/Auth/ForgotPassword'));
const ResetPassword = lazy(() => import('../pages/Auth/ResetPassword'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Profile = lazy(() => import('../pages/Dashboard/Profile'));
const MyListings = lazy(() => import('../pages/Dashboard/MyListings'));
const MyBids = lazy(() => import('../pages/Dashboard/MyBids'));
const MyFavorites = lazy(() => import('../pages/Dashboard/MyFavorites'));
const MySubscription = lazy(() => import('../pages/Dashboard/MySubscription'));
const Plans = lazy(() => import('../pages/Plans/Plans'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const AppRoutes = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<Search />} />
          <Route path="/veiculos/:id" element={<VehicleDetails />} />
          <Route path="/planos" element={<Plans />} />

          {/* Rotas apenas para não autenticados */}
          <Route
            path="/entrar"
            element={
              <PublicOnlyRoute>
                <Login />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="/cadastrar"
            element={
              <PublicOnlyRoute>
                <Register />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="/esqueci-senha"
            element={
              <PublicOnlyRoute>
                <ForgotPassword />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="/redefinir-senha"
            element={
              <PublicOnlyRoute>
                <ResetPassword />
              </PublicOnlyRoute>
            }
          />

          {/* Rotas privadas */}
          <Route
            path="/anunciar"
            element={
              <PrivateRoute>
                <CreateListing />
              </PrivateRoute>
            }
          />
          <Route
            path="/painel"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to="anuncios" replace />} />
            <Route path="perfil" element={<Profile />} />
            <Route path="anuncios" element={<MyListings />} />
            <Route path="lances" element={<MyBids />} />
            <Route path="favoritos" element={<MyFavorites />} />
            <Route path="assinatura" element={<MySubscription />} />
          </Route>

          {/* Rota 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}; 