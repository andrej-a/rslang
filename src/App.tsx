import React from 'react';
import 'typeface-rubik';

import './App.scss';
import MainPage from './pages/MainPage/MainPage';
import { GlobalStyle } from '../src/styles/global';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { GamesData } from './pages/Games/InitialPage/GamesData';
import InitialGame from './pages/Games/InitialPage/InitialGame';
import ResultPage from './pages/Games/ResultPage/ResultPage';
import { IWord } from './components/Interfaces';



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {/* <InitialGame title={GamesData[1].title} img={GamesData[1].img}/> */}
      {/* <ResultPage result={data}/> */}
    </div>
  );
}

export default App;
