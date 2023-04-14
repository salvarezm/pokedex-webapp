import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import { Box, ThemeProvider } from 'theme-ui';
import { theme } from './shared/theme';
import { store } from './store'
import { Provider } from 'react-redux'
import { router } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box className='pokedex_container' sx={{
          maxWidth: '1200px',
          margin: '0 auto 50px auto',
          backgroundColor: 'white',
        }}>
          <Box sx={{
            maxWidth: '950px',
            margin: '0 auto 50px auto',
            paddingBottom: '50px',
            backgroundColor: 'white',
          }}>
          <RouterProvider router={router} />
          </Box>
        </Box>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

