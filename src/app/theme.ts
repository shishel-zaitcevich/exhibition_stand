import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2934FF'
    },
    background: {
      default: '#000000'
    }
  },
  typography: {
    fontFamily: `'Roboto Slab', sans-serif`,
  },
});

export default theme;