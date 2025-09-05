// src/theme/theme.js
// ============================
// 📌 Archivo central del tema de la aplicación
// Aquí definís TODOS los estilos globales que se aplican con Material-UI.
// Ventaja: si mañana querés cambiar un color, fuente o tamaño global,
// lo hacés acá y se actualiza en toda la app automáticamente.
// ============================

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // 🎨 Paleta de colores global
  palette: {
    mode: 'light', // Podés cambiar a 'dark' para modo oscuro
    primary: {
      main: '#673ab7', // Color principal (AppBar, botones primarios)
      light: '#9a67ea', // Variante más clara
      dark: '#320b86', // Variante más oscura
      contrastText: '#ffffff', // Color del texto encima del primary
    },
    secondary: {
      main: '#ff4081', // Color secundario (botones secundarios, highlights)
      light: '#ff79b0',
      dark: '#c60055',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4caf50', // Verde (acciones correctas, confirmaciones)
    },
    warning: {
      main: '#ff9800', // Naranja (advertencias)
    },
    error: {
      main: '#f44336', // Rojo (errores, alertas críticas)
    },
    info: {
      main: '#2196f3', // Azul (mensajes informativos)
    },
    background: {
      default: '#fafafa', // Fondo por defecto de la app
      paper: '#ffffff',  // Fondo de tarjetas, modales, etc.
    },
    text: {
      primary: '#212121', // Texto principal
      secondary: '#757575', // Texto secundario
    },
  },

  // 🖋️ Tipografía global
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Fuente por defecto
    h1: {
      fontSize: '2.5rem', // Titulares grandes (ej: página principal)
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem', // Subtítulos grandes
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem', // Texto de párrafos
    },
    body2: {
      fontSize: '0.875rem', // Texto secundario (ej: notas, captions)
    },
    button: {
      textTransform: 'none', // ❌ Evita que los botones pasen a MAYÚSCULAS
      fontWeight: 600,
    },
  },

  // ⚙️ Configuración de breakpoints (responsive design)
  breakpoints: {
    values: {
      xs: 0,    // Celulares
      sm: 600,  // Tablets vertical
      md: 960,  // Tablets horizontal / laptops pequeñas
      lg: 1280, // Laptops grandes
      xl: 1920, // Monitores grandes
    },
  },

  // 🎭 Estilos globales para componentes
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Bordes redondeados globales
          padding: '6px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Bordes redondeados para todas las cards
          boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', // Sombra suave
        },
      },
    },
  },
});

export default theme;
