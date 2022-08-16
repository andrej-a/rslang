import './App.scss';
import React from 'react';
import { GlobalStyle } from '../src/styles/global';
import 'typeface-rubik';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Registration />
    </div>
  );
}

export default App;
