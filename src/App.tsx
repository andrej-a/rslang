import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import './App.scss';
import 'typeface-rubik';

import Registration from './pages/Registration/Registration';
import MainPage from './pages/MainPage/MainPage';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MiniGames from './pages/MiniGamesPage/MiniGame';
import SprintGame from './pages/MiniGamesPage/SprintGame/SprintGame';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      
      <Header />

      <Routes>
      <Route path='/' element={
        <MainPage />
      }/>
      <Route path='/registration' element={
        <Registration />
      }/>
      <Route path='/games' element={
        <MiniGames />
      }/>
      <Route path='/statistics' element={
        <SprintGame />
      }/>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
