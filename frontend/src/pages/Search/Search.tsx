import React from 'react';
import { Container, Typography } from '@mui/material';

const Search: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" sx={{ my: 4 }}>
        Resultados da Busca
      </Typography>
    </Container>
  );
};

export default Search;
