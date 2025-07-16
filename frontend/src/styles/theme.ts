import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}

const baseTheme = createTheme(
  {
    palette: {
      primary: {
        main: '#F3123C', // Vermelho Webmotors
        light: '#FF4D6A',
        dark: '#D40022',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#1B2A6C', // Azul Webmotors
        light: '#2B3F8C',
        dark: '#0F1A4D',
        contrastText: '#FFFFFF',
      },
      neutral: {
        main: '#666666',
        light: '#999999',
        dark: '#333333',
        contrastText: '#FFFFFF',
      },
      error: {
        main: '#F3123C',
        light: '#FF4D6A',
        dark: '#D40022',
      },
      warning: {
        main: '#FFA500',
        light: '#FFB733',
        dark: '#CC8400',
      },
      info: {
        main: '#1B2A6C',
        light: '#2B3F8C',
        dark: '#0F1A4D',
      },
      success: {
        main: '#00A651',
        light: '#00BF5F',
        dark: '#008C44',
      },
      text: {
        primary: '#333333',
        secondary: '#666666',
        disabled: '#999999',
      },
      background: {
        default: '#F4F4F4',
        paper: '#FFFFFF',
      },
      divider: '#E5E5E5',
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 700,
        lineHeight: 1.3,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 700,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 700,
        lineHeight: 1.4,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: 1.4,
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.5,
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.57,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.57,
      },
      button: {
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'none',
      },
      caption: {
        fontSize: '0.75rem',
        lineHeight: 1.66,
      },
      overline: {
        fontSize: '0.75rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        lineHeight: 2.66,
        letterSpacing: '1px',
      },
    },
    shape: {
      borderRadius: 3,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
          },
          html: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
            width: '100%',
          },
          body: {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            minHeight: '100%',
            width: '100%',
            backgroundColor: '#F4F4F4',
          },
          '#root': {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 3,
            textTransform: 'none',
            fontWeight: 700,
            padding: '8px 16px',
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 3,
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
            '&:hover': {
              boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
            },
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
        },
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              backgroundColor: '#FFFFFF',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 3,
          },
          notchedOutline: {
            borderColor: '#E5E5E5',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFFFFF',
            color: '#333333',
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            minHeight: 48,
          },
          indicator: {
            height: 3,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '0.875rem',
            minHeight: 48,
            padding: '12px 16px',
          },
        },
      },
    },
  },
  ptBR
);

export const theme = responsiveFontSizes(baseTheme);
