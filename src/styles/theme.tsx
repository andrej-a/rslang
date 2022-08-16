import { createTheme } from '@mui/material/styles';
import { Colors } from './constansts';

export const Formtheme = createTheme({
  palette: {
    primary: {
      main: Colors.BLACK,
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

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.GRADIENT,
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