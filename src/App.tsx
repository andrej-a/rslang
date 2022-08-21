import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../src/styles/global';
import './App.scss';
import 'typeface-rubik';

import Registration from './pages/Registration/Registration';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MiniGames from './pages/MiniGamesPage/MiniGame';
import TextBook from './pages/TextBook/TextBook';
import { GetTitle } from './utils/utils';

function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      
      <Header title={GetTitle('')} />

      <Routes>
      <Route path='/' element={
        <MainPage />
      }/>
      <Route path='/registration' element={
        <Registration />
      }/>
      <Route path='/textbook' element={
        <TextBook />
      }/>
      <Route path='/games' element={
        <MiniGames />
      }/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
