import { createTheme } from '@mui/material/styles';
export default createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "1px solid #487e4c" // Color is primary.light
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: "1px solid #f1f1f1"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #f1f1f1"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8 // Everybutton should have this
        }
      }
    }
  },
  palette: {
    primary: {
      light: "#6e43a3",
      dark: "#330e62",
      main: "#4a148c",
      contrastText: "#fffff"
    },
    secondary: {
      dark: "#381f75",
      light: "#7357b9",
      main: "#512da8",
      contrastText: "#ffffff"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    fontFamily: [
      "Montserrat",
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','), // prefer montserrat
      allVariants: {
        color: "#1f1f1f" // Contrast color for the pallete
      },
  },
});
