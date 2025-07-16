import React from 'react';
import { Box } from '@mui/material';
import { SearchSection } from '../../components/Home/SearchSection';
import { SolutionsSection } from '../../components/Home/SolutionsSection';
import { OfficialStores } from '../../components/Home/OfficialStores';
import { FeaturedSection } from '../../components/Home/FeaturedSection';
import { ServicesSection } from '../../components/Home/ServicesSection';

export const Home: React.FC = () => {
  return (
    <Box>
      <SearchSection />
      <SolutionsSection />
      <OfficialStores />
      <FeaturedSection />
      <ServicesSection />
    </Box>
  );
};
