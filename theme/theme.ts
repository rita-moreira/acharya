import { createMuiTheme, createStyles, makeStyles, Theme } from '@material-ui/core';

export const primaryColor = "#334E47";
export const secondaryColor = "#578478";
export const tertiaryColor = "#C3DED7";

export const light = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor
    },
    secondary: {
      main: "#FFFFFF"
    },
    text: {
      primary: '#707070'
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontSize: "25px",
      fontWeight: "bold"
    },
    h2: {
      fontSize: "15px",
      fontWeight: "bold",
      letterSpacing: "1px",
    },
    h3: {
      fontSize: "12px",
      fontWeight: "normal",
    }
  },
  
});

export const dark = createMuiTheme({
  palette: {
    primary: {
      main: tertiaryColor
    },
    secondary: {
      main: "#FFFFFF"
    },
    text: {
      primary: '#B4B4B4'
    },
    background: {
      default: '#17191A',
      paper: '#242526'
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontSize: "25px",
      fontWeight: "bold"
    },
    h2: {
      fontSize: "15px",
      fontWeight: "bold",
      letterSpacing: "1px",
    },
    h3: {
      fontSize: "12px",
      fontWeight: "normal",
    }
  }
});


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    primaryButton: {
      fontSize: 16,
      padding: "5px 50px",
      borderRadius: "25px",
      backgroundColor: secondaryColor,
      textAlign: "center",
      width: "fit-content",
      fontFamily: "Roboto",
      fontWeight: "bold",
      color: "#000000",
      textTransform: "none",

      "&:hover": {
        backgroundColor: tertiaryColor,
        color: "#000000",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "2px 20px",
        fontSize: "12px"
      },
    },
    pageBackground: {
      backgroundColor: theme.palette.background.default,
      minHeight: "100vh",
    },
    positiveButton: {
      fontSize: 16,
      padding: "10px 60px",
      borderRadius: "25px",
      backgroundColor: secondaryColor,
      textAlign: "center",
      width: "fit-content",
      fontFamily: "Roboto",
      fontWeight: "bold",
      color: "black",
      textTransform: "none",
      boxShadow: "0px 0px 6px #707070",
      "&:hover": {
        backgroundColor: primaryColor,
        color: "#FFFFFF",
      },
    },
    negativeButton: {
      fontSize: 14,
      padding: "10px 15px",
      borderRadius: "25px",
      backgroundColor: "#FFFFFF",
      textAlign: "center",
      width: "fit-content",
      fontFamily: "Roboto",
      fontWeight: "bold",
      color: "black",
      textTransform: "none",
      boxShadow: "0px 0px 6px #707070",
      "&:hover": {
        backgroundColor: "#EFEFEF",
        color: "black",
      },

    },
    
  })
);




