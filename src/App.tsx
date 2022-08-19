import React from 'react';
import { GlobalStyle } from '../src/styles/global';
import './App.scss';
import 'typeface-rubik';

import Registration from './pages/Registration/Registration';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Registration />
      <MainPage />
    </div>
  );
}

export default App;
