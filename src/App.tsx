import './App.scss';
import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import { GlobalStyle } from '../src/styles/global';
import 'typeface-rubik';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MainPage />
    </div>
  );
}

export default App;
