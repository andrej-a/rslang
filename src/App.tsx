import React from 'react';
import 'typeface-rubik';

import './App.scss';
import MainPage from './pages/MainPage/MainPage';
import { GlobalStyle } from '../src/styles/global';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MainPage />
    </div>
  );
}

export default App;
