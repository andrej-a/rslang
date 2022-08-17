import { createTheme } from '@mui/material/styles';
import { Colors } from './constansts';

export const Formtheme = createTheme({
  palette: {
    primary: {
      main: '#222',
    },
    secondary: {
      main: Colors.WHITE,
    },
    success: {
      main: Colors.LIGHT_GREEN,
    },
    warning: {
      main: Colors.RED,
    },
  },
});
