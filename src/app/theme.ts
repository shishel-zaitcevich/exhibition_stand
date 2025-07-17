import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2934FF',
      dark: '#031457'
    },
    secondary: {
      main: '#2934FF',
      light: '#bcbcbc'
    },
    background: {
      default: '#000000',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: `'Roboto Slab', sans-serif`,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    }
  }
});

export default theme;