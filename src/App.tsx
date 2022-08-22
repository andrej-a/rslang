import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
  const [pageTitle, setPageTitle] = useState<string>(GetTitle(global.location.pathname) ?? 'Easy English');
  useEffect(() => {
    setPageTitle(() => GetTitle(global.location.pathname) ?? 'Easy English');
  }, [useLocation()]);
  return (
    <div className="App">
      <GlobalStyle />

      <Header title={pageTitle} />

      <Routes>
        <Route path='/' element={
          <MainPage />
        } />
        <Route path='/registration' element={
          <Registration />
        } />
        <Route path='/textbook' element={
          <TextBook />
        } />
        <Route path='/games' element={
          <MiniGames />
        } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
