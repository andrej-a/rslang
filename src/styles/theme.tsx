import { createTheme } from '@mui/material/styles';
import { GRADIENT, WHITE, LIGHT_GREEN, RED } from './constansts';

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

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: "$labelcolor"
        }
      }
    }
  }
})


<MuiThemeProvider theme={theme}>

// Your Component here

</MuiThemeProvider>