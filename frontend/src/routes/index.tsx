import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';

// Lazy imports
const Search = React.lazy(() => import('../pages/Search/Search'));
const VehicleDetails = React.lazy(() => import('../pages/VehicleDetails/VehicleDetails'));

// Loading component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}>
    Carregando...
  </div>
);

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/search"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Search />
          </Suspense>
        }
      />
      <Route
        path="/vehicle/:id"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <VehicleDetails />
          </Suspense>
        }
      />
    </Routes>
  );
}
