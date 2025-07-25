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
      xs: 0,    // от 0px до 360px
      sm: 360,  // от 360px до 599px
      md: 600,  // от 600px до 899px
      lg: 900,  // от 900px до 1199px
      xl: 1200, // от 1200px до 1399px
    }
  }
});

export default theme;