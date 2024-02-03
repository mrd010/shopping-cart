import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from './Styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <ThemeProvider theme={theme}>
      <Router></Router>
    </ThemeProvider>
  </React.StrictMode>
);
