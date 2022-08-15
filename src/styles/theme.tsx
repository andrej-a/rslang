import { createTheme } from '@mui/material/styles';
import { GRADIENT, WHITE, LIGHT_GREEN, RED } from './constants';

export const theme = createTheme({
  palette: {
    primary: {
      main: GRADIENT,
    },
    secondary: {
      main: WHITE,
    },
    success: {
      main: LIGHT_GREEN,
    },
    warning: {
      main: RED,
    },
  },
});