import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import './index.scss';
import App from './App';
import { theme } from './styles/theme';
import { ApplicationProvider } from './components/Context/ApplicationContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  //<React.StrictMode>
  <Router>
    <ThemeProvider theme={theme}>
      <ApplicationProvider>
        <App />
      </ApplicationProvider>
    </ThemeProvider>
  </Router>,
  //</React.StrictMode>,
);
