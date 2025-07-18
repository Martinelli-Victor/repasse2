import { styled } from '@mui/material/styles';
import { Card, CardMedia, Box, Paper } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  overflow: 'visible',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: 300,
  height: 200,
  objectFit: 'cover',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 200,
  },
}));

export const FilterPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  position: 'sticky',
  top: theme.spacing(2),
}));

export const VehicleInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  '& .MuiTypography-h6': {
    fontWeight: 600,
  },
  '& .MuiTypography-body2': {
    color: theme.palette.text.secondary,
  },
}));

export const PriceTag = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  display: 'inline-block',
  marginTop: theme.spacing(1),
}));

export const SponsoredTag = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  left: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.75rem',
  fontWeight: 500,
}));
