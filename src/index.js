import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MyContextProvider } from './context/Context';
import './fonts/Quicksand-Light.woff';
import './fonts/Quicksand-Light.woff2';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>
);
