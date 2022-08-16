import { createTheme } from '@mui/material/styles';
import { Colors } from './constansts';

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

// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   overrides: {
//     MuiIconButton: {
//       root: {
//         '&:hover': {
//           backgroundColor: "$labelcolor"
//         }
//       }
//     }
//   }
// })


// <MuiThemeProvider theme={theme}>

// // Your Component here

// </MuiThemeProvider>