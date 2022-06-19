import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import * as React from "react";

// A custom theme for this app
const theme = createTheme({
  typography: {
    logo: {
      cursor: 'pointer',
      fontSize: '20px',
      fontWeight: '500',
      height: '32px',
      letterSpacing: '0.15px',
      lineHeight: '32px',
      width: '75.7812px',
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
