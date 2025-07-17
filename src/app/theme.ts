import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2934FF',
     
    },

    secondary: {
      main: '#2934FF'
    },
    background: {
      default: '#000000'
    },
 
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