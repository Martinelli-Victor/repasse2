import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../styles/theme';

interface ThemeContextData {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

// Inicializa o contexto com valores padrão
const ThemeContext = createContext<ThemeContextData>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('@Repasse2:theme');
      return savedTheme === 'dark';
    } catch (error) {
      console.error('Error reading theme from localStorage:', error);
      return false;
    }
  });

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      try {
        localStorage.setItem('@Repasse2:theme', newMode ? 'dark' : 'light');
      } catch (error) {
        console.error('Error saving theme to localStorage:', error);
      }
      return newMode;
    });
  }, []);

  // Debug log
  React.useEffect(() => {
    console.log('ThemeProvider state:', { isDarkMode });
  }, [isDarkMode]);

  const value = React.useMemo(() => ({
    isDarkMode,
    toggleTheme,
  }), [isDarkMode, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
