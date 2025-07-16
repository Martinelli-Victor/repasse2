import { Card, CardContent, Typography, Button, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Plan } from '../../services/payments';

interface PlanCardProps {
  plan: Plan;
  isSelected?: boolean;
  onSelect: (plan: Plan) => void;
}

export const PlanCard = ({ plan, isSelected = false, onSelect }: PlanCardProps) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const formatDuration = (days: number) => {
    if (days === 30) return '1 mês';
    if (days === 90) return '3 meses';
    if (days === 180) return '6 meses';
    if (days === 365) return '1 ano';
    return `${days} dias`;
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: isSelected ? 2 : 1,
        borderColor: isSelected ? 'primary.main' : 'divider',
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'translateY(-4px)',
          transition: 'transform 0.2s ease-in-out',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ textAlign: 'center', color: 'primary.main', fontWeight: 'bold' }}
        >
          {plan.title}
        </Typography>

        <Typography
          variant="h4"
          component="div"
          sx={{ textAlign: 'center', mb: 2 }}
        >
          {formatPrice(plan.price)}
          <Typography
            variant="subtitle1"
            component="span"
            sx={{ color: 'text.secondary' }}
          >
            /{formatDuration(plan.duration)}
          </Typography>
        </Typography>

        <List sx={{ mb: 2 }}>
          {plan.features.map((feature, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CheckCircleIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 'auto' }}>
          <Button
            variant={isSelected ? 'contained' : 'outlined'}
            color="primary"
            fullWidth
            onClick={() => onSelect(plan)}
            size="large"
          >
            {isSelected ? 'Plano Selecionado' : 'Selecionar Plano'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}; 