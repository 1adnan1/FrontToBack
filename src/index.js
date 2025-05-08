import {ColorModeScript, ChakraProvider,theme } from '@chakra-ui/react'
import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from "./ColorModeSwitcher"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeScript/>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
    <App />
    </ChakraProvider>
  </React.StrictMode>
);
