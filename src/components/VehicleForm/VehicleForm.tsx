import { useState, useRef } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  FormHelperText,
  Alert,
  IconButton,
} from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Vehicle } from '../../services/vehicles';

interface VehicleFormProps {
  onSubmit: (values: FormData) => Promise<void>;
  initialValues?: Partial<Vehicle>;
  isLoading?: boolean;
}

const validationSchema = yup.object({
  title: yup.string().required('Título é obrigatório'),
  description: yup
    .string()
    .required('Descrição é obrigatória')
    .min(50, 'Descrição deve ter no mínimo 50 caracteres'),
  brand: yup.string().required('Marca é obrigatória'),
  model: yup.string().required('Modelo é obrigatório'),
  year: yup
    .number()
    .required('Ano é obrigatório')
    .min(1900, 'Ano inválido')
    .max(new Date().getFullYear(), 'Ano inválido'),
  mileage: yup
    .number()
    .required('Quilometragem é obrigatória')
    .min(0, 'Quilometragem inválida'),
  price: yup
    .number()
    .required('Preço é obrigatório')
    .min(1000, 'Preço mínimo é R$ 1.000'),
  transmission: yup
    .string()
    .oneOf(['manual', 'automatic'], 'Câmbio inválido')
    .required('Câmbio é obrigatório'),
  fuel: yup
    .string()
    .oneOf(
      ['flex', 'gasoline', 'ethanol', 'diesel', 'electric', 'hybrid'],
      'Combustível inválido'
    )
    .required('Combustível é obrigatório'),
  color: yup.string().required('Cor é obrigatória'),
  location: yup.string().required('Localização é obrigatória'),
});

export const VehicleForm = ({
  onSubmit,
  initialValues,
  isLoading = false,
}: VehicleFormProps) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>(
    initialValues?.images || []
  );
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formik = useFormik({
    initialValues: {
      title: initialValues?.title || '',
      description: initialValues?.description || '',
      brand: initialValues?.brand || '',
      model: initialValues?.model || '',
      year: initialValues?.year || new Date().getFullYear(),
      mileage: initialValues?.mileage || 0,
      price: initialValues?.price || 0,
      transmission: initialValues?.transmission || 'manual',
      fuel: initialValues?.fuel || 'flex',
      color: initialValues?.color || '',
      location: initialValues?.location || '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        if (selectedImages.length === 0 && !initialValues?.images?.length) {
          setError('Adicione pelo menos uma foto do veículo');
          return;
        }

        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value.toString());
        });

        selectedImages.forEach((file) => {
          formData.append('images', file);
        });

        await onSubmit(formData);
      } catch (err) {
        setError('Ocorreu um erro ao salvar o veículo. Tente novamente.');
      }
    },
  });

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const totalImages = selectedImages.length + files.length;

    if (totalImages > 20) {
      setError('Máximo de 20 fotos permitidas');
      return;
    }

    setSelectedImages((prev) => [...prev, ...files]);
    setPreviewImages((prev) => [
      ...prev,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
    setError(null);
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddImagesClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {error && (
          <Grid item xs={12}>
            <Alert severity="error">{error}</Alert>
          </Grid>
        )}

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Fotos do Veículo
          </Typography>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageSelect}
            style={{ display: 'none' }}
            ref={fileInputRef}
          />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: 2,
              mb: 2,
            }}
          >
            {previewImages.map((preview, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  paddingTop: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <IconButton
                  size="small"
                  onClick={() => handleRemoveImage(index)}
                  sx={{
                    position: 'absolute',
                    top: 4,
                    right: 4,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                    },
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
            <Button
              variant="outlined"
              onClick={handleAddImagesClick}
              sx={{
                height: '100%',
                minHeight: 150,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AddIcon sx={{ mb: 1 }} />
              Adicionar Fotos
            </Button>
          </Box>
          <FormHelperText>
            Adicione até 20 fotos do veículo. A primeira foto será a capa do
            anúncio.
          </FormHelperText>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            name="title"
            label="Título do Anúncio"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            name="description"
            label="Descrição"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth error={formik.touched.brand && Boolean(formik.errors.brand)}>
            <InputLabel>Marca</InputLabel>
            <Select
              name="brand"
              value={formik.values.brand}
              onChange={formik.handleChange}
            >
              <MenuItem value="chevrolet">Chevrolet</MenuItem>
              <MenuItem value="fiat">Fiat</MenuItem>
              <MenuItem value="ford">Ford</MenuItem>
              <MenuItem value="honda">Honda</MenuItem>
              <MenuItem value="hyundai">Hyundai</MenuItem>
              <MenuItem value="toyota">Toyota</MenuItem>
              <MenuItem value="volkswagen">Volkswagen</MenuItem>
            </Select>
            {formik.touched.brand && formik.errors.brand && (
              <FormHelperText>{formik.errors.brand}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="model"
            label="Modelo"
            value={formik.values.model}
            onChange={formik.handleChange}
            error={formik.touched.model && Boolean(formik.errors.model)}
            helperText={formik.touched.model && formik.errors.model}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="number"
            name="year"
            label="Ano"
            value={formik.values.year}
            onChange={formik.handleChange}
            error={formik.touched.year && Boolean(formik.errors.year)}
            helperText={formik.touched.year && formik.errors.year}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="number"
            name="mileage"
            label="Quilometragem"
            value={formik.values.mileage}
            onChange={formik.handleChange}
            error={formik.touched.mileage && Boolean(formik.errors.mileage)}
            helperText={formik.touched.mileage && formik.errors.mileage}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="number"
            name="price"
            label="Preço"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl
            fullWidth
            error={
              formik.touched.transmission && Boolean(formik.errors.transmission)
            }
          >
            <InputLabel>Câmbio</InputLabel>
            <Select
              name="transmission"
              value={formik.values.transmission}
              onChange={formik.handleChange}
            >
              <MenuItem value="manual">Manual</MenuItem>
              <MenuItem value="automatic">Automático</MenuItem>
            </Select>
            {formik.touched.transmission && formik.errors.transmission && (
              <FormHelperText>{formik.errors.transmission}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl
            fullWidth
            error={formik.touched.fuel && Boolean(formik.errors.fuel)}
          >
            <InputLabel>Combustível</InputLabel>
            <Select
              name="fuel"
              value={formik.values.fuel}
              onChange={formik.handleChange}
            >
              <MenuItem value="flex">Flex</MenuItem>
              <MenuItem value="gasoline">Gasolina</MenuItem>
              <MenuItem value="ethanol">Etanol</MenuItem>
              <MenuItem value="diesel">Diesel</MenuItem>
              <MenuItem value="electric">Elétrico</MenuItem>
              <MenuItem value="hybrid">Híbrido</MenuItem>
            </Select>
            {formik.touched.fuel && formik.errors.fuel && (
              <FormHelperText>{formik.errors.fuel}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="color"
            label="Cor"
            value={formik.values.color}
            onChange={formik.handleChange}
            error={formik.touched.color && Boolean(formik.errors.color)}
            helperText={formik.touched.color && formik.errors.color}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            name="location"
            label="Localização"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
          />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isLoading}
            >
              {initialValues ? 'Salvar Alterações' : 'Publicar Anúncio'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}; 