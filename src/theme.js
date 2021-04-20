import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#7cb342',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: '#689f38',
    },
    background: {
      default: '#f7f7f7',
    },
  },
  typography: {
    fontFamily: [
      'Rubik',
    ].join(','),
  }
});

export default theme;