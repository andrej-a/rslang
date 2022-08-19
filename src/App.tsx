import React from 'react';

import { GlobalStyle } from '../src/styles/global';
import 'typeface-rubik';
import Registration from './pages/Registration/Registration';

import 'typeface-rubik';

import './App.scss';
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
