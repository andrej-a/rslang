import React from 'react';
import 'typeface-rubik';

import './App.scss';
import MainPage from './pages/MainPage/MainPage';
import { GlobalStyle } from '../src/styles/global';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { GamesData } from './pages/Games/GamesData';
import InitialGame from './pages/Games/InitialGame';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <InitialGame title={GamesData[1].title} img={GamesData[1].img}/>
      <Footer />
    </div>
  );
}

export default App;
