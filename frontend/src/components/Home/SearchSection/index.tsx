import React, { useState } from 'react';
import {
  Box,
  Container,
  Tabs,
  Tab,
  TextField,
  Button,
  InputAdornment,
  Paper,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)({
  background: '#F4F4F4',
  padding: '40px 0',
});

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiTab-root': {
    color: '#666666',
    textTransform: 'none',
    fontSize: '16px',
    padding: '8px 16px',
    minHeight: '40px',
    '&.Mui-selected': {
      color: theme.palette.primary.main,
      fontWeight: 500,
    },
  },
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
    height: '2px',
  },
}));

const SearchBox = styled(Paper)({
  padding: '24px',
  borderRadius: '8px',
  backgroundColor: '#FFFFFF',
});

const VehicleTypeButton = styled(Button)(({ theme, selected }) => ({
  color: selected ? '#FFFFFF' : '#666666',
  backgroundColor: selected ? theme.palette.primary.main : '#F4F4F4',
  textTransform: 'none',
  borderRadius: '20px',
  padding: '6px 16px',
  marginRight: '8px',
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.dark : '#E5E5E5',
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#FFFFFF',
  textTransform: 'none',
  padding: '12px 24px',
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const SearchSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [vehicleType, setVehicleType] = useState('todos');

  return (
    <SearchContainer>
      <Container maxWidth="lg">
        <StyledTabs
          value={selectedTab}
          onChange={(_, value) => setSelectedTab(value)}
        >
          <Tab label="Comprar carros" />
          <Tab label="Comprar motos" />
          <Tab label="Quero vender" />
          <Tab label="Quero financiar" />
        </StyledTabs>

        <Box sx={{ mb: 2 }}>
          <VehicleTypeButton
            selected={vehicleType === 'todos'}
            onClick={() => setVehicleType('todos')}
          >
            Todos
          </VehicleTypeButton>
          <VehicleTypeButton
            selected={vehicleType === 'novos'}
            onClick={() => setVehicleType('novos')}
          >
            Novos
          </VehicleTypeButton>
          <VehicleTypeButton
            selected={vehicleType === 'usados'}
            onClick={() => setVehicleType('usados')}
          >
            Usados
          </VehicleTypeButton>
        </Box>

        <SearchBox>
          <TextField
            fullWidth
            placeholder="Digite marca ou modelo do carro"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#F4F4F4',
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'transparent',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'transparent',
                },
              },
            }}
          />
          <Box sx={{ mt: 2 }}>
            <SearchButton variant="contained">
              VER OFERTAS (384.818)
            </SearchButton>
          </Box>
        </SearchBox>
      </Container>
    </SearchContainer>
  );
};
