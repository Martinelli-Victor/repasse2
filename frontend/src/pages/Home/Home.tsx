import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../../components/Layout/Header';
import { Footer } from '../../components/Layout/Footer';
import { SearchSection } from '../../components/Home/SearchSection';
import { SolutionsSection } from '../../components/Home/SolutionsSection';
import { OfficialStores } from '../../components/Home/OfficialStores';
import { FeaturedSection } from '../../components/Home/FeaturedSection';
import { ServicesSection } from '../../components/Home/ServicesSection';

export const Home: React.FC = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ mt: 7 }}> {/* Espaço para o header fixo */}
        <SearchSection />
        <SolutionsSection />
        <OfficialStores />
        <FeaturedSection />
        <ServicesSection />
      </Box>
      <Footer />
    </Box>
  );
};
