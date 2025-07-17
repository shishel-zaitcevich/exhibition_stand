import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2934FF',
      dark: '#031457'
    },
    secondary: {
      main: '#bcbcbc',
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
});

export default theme;