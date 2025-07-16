import { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Typography,
  IconButton,
  Collapse,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface SearchFormProps {
  onSearch: (values: SearchFormValues) => void;
  initialValues?: Partial<SearchFormValues>;
}

interface SearchFormValues {
  term: string;
  brand?: string;
  model?: string;
  yearStart?: number;
  yearEnd?: number;
  priceRange: [number, number];
  transmission?: string;
  fuel?: string;
  color?: string;
  hasReport?: boolean;
  location?: string;
}

const validationSchema = yup.object({
  term: yup.string(),
  brand: yup.string(),
  model: yup.string(),
  yearStart: yup.number().min(1900).max(new Date().getFullYear()),
  yearEnd: yup.number().min(1900).max(new Date().getFullYear()),
  priceRange: yup.array().of(yup.number().min(0)),
  transmission: yup.string(),
  fuel: yup.string(),
  color: yup.string(),
  hasReport: yup.boolean(),
  location: yup.string(),
});

const defaultValues: SearchFormValues = {
  term: '',
  priceRange: [0, 500000],
};

export const SearchForm = ({ onSearch, initialValues = {} }: SearchFormProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const formik = useFormik({
    initialValues: { ...defaultValues, ...initialValues },
    validationSchema,
    onSubmit: onSearch,
  });

  return (
    <Paper sx={{ p: 3 }}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            fullWidth
            name="term"
            placeholder="Busque por marca, modelo, ano..."
            value={formik.values.term}
            onChange={formik.handleChange}
            error={formik.touched.term && Boolean(formik.errors.term)}
            helperText={formik.touched.term && formik.errors.term}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            startIcon={<SearchIcon />}
          >
            Buscar
          </Button>
          <IconButton onClick={() => setShowFilters(!showFilters)}>
            <FilterListIcon />
          </IconButton>
        </Box>

        <Collapse in={showFilters}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Marca</InputLabel>
                <Select
                  name="brand"
                  value={formik.values.brand || ''}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="">Todas</MenuItem>
                  {/* Lista de marcas será preenchida dinamicamente */}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Modelo</InputLabel>
                <Select
                  name="model"
                  value={formik.values.model || ''}
                  onChange={formik.handleChange}
                  disabled={!formik.values.brand}
                >
                  <MenuItem value="">Todos</MenuItem>
                  {/* Lista de modelos será preenchida dinamicamente */}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                type="number"
                name="yearStart"
                label="Ano De"
                value={formik.values.yearStart || ''}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                type="number"
                name="yearEnd"
                label="Ano Até"
                value={formik.values.yearEnd || ''}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography gutterBottom>Faixa de Preço</Typography>
              <Slider
                name="priceRange"
                value={formik.values.priceRange}
                onChange={(_, value) =>
                  formik.setFieldValue('priceRange', value)
                }
                valueLabelDisplay="auto"
                min={0}
                max={500000}
                step={1000}
                valueLabelFormat={(value) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Câmbio</InputLabel>
                <Select
                  name="transmission"
                  value={formik.values.transmission || ''}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="">Todos</MenuItem>
                  <MenuItem value="manual">Manual</MenuItem>
                  <MenuItem value="automatic">Automático</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Combustível</InputLabel>
                <Select
                  name="fuel"
                  value={formik.values.fuel || ''}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="">Todos</MenuItem>
                  <MenuItem value="flex">Flex</MenuItem>
                  <MenuItem value="gasoline">Gasolina</MenuItem>
                  <MenuItem value="ethanol">Etanol</MenuItem>
                  <MenuItem value="diesel">Diesel</MenuItem>
                  <MenuItem value="electric">Elétrico</MenuItem>
                  <MenuItem value="hybrid">Híbrido</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                name="location"
                label="Localização"
                value={formik.values.location || ''}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        </Collapse>
      </form>
    </Paper>
  );
}; 