import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Box, ThemeProvider } from 'theme-ui';
import { Provider } from 'react-redux';
import { theme } from './shared/theme/theme';
import { store } from './store';
import { Router } from './router';
import { Navbar } from './components/navbar/navbar';
import { Router } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
