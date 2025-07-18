import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Search } from '../pages/Search';
import { PublicOnlyRoute } from './PublicOnlyRoute';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comprar" element={<Search />} />
      <Route path="/vender" element={<div>Em breve: Página de Anúncio</div>} />
      <Route path="/servicos" element={<div>Em breve: Página de Serviços</div>} />
      <Route path="/ajuda" element={<div>Em breve: Página de Ajuda</div>} />
      <Route
        path="/entrar"
        element={
          <PublicOnlyRoute>
            <Login />
          </PublicOnlyRoute>
        }
      />
      <Route path="/cadastrar" element={<div>Em breve: Página de Cadastro</div>} />
      <Route path="/perfil" element={<div>Em breve: Página de Perfil</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
