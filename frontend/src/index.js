import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#006989', // Vibrant orange
    },
    secondary: {
      main: '#03a9f4', // Bright blue
    },
    success: {
      main: '#4caf50', // Green for success
    },
    error: {
      main: '#f44336', // Red for error
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>,
  document.getElementById('root')
);


