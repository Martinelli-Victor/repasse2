import { type ReactNode } from 'react';
import { Box } from '@mui/material';
import { Header } from './Header/index';
import { Footer } from './Footer/index';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          width: '100%',
          paddingTop: '64px', // Altura do header
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
