import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MantineProvider } from '@mantine/core';
import App from './App';
import { useMantineTheme } from '@mantine/core';
// const theme = createTheme({
//   /** Your theme override here */fontFamily: 'Open Sans, sans-serif',
//   primaryColor: 'cyan',
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <MantineProvider  theme={theme} > */}
      <App />
    {/* </MantineProvider> */}
  </React.StrictMode>
);
