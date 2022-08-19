import './App.scss';
import React from 'react';
import TextBook from './pages/TextBook/TextBook';
import { GlobalStyle } from '../src/styles/global';
import 'typeface-rubik';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TextBook />
    </div>
  );
}

export default App;
