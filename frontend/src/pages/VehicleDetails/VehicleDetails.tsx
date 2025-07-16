import React from 'react';
import { Container, Typography } from '@mui/material';

const VehicleDetails: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" sx={{ my: 4 }}>
        Detalhes do Veículo
      </Typography>
    </Container>
  );
};

export default VehicleDetails;
