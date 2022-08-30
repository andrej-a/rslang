import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
/* STYLES */
import { GlobalStyle } from '../src/styles/global';
import './App.scss';
import 'typeface-rubik';
/* UTILS */
import { GetTitle } from './utils/utils';
/* COMPONENTS */
import Registration from './pages/Registration/Registration';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MiniGames from './pages/MiniGamesPage/MiniGame';
import TextBook from './pages/TextBook/TextBook';
import { GamesData } from './pages/MiniGamesPage/InitialPage/GamesData';
import InitialGame from './pages/MiniGamesPage/InitialPage/InitialGame';
import AudioChallengeGame from './pages/MiniGamesPage/AudioChallengeGame/AudioChallengeGame';
import Statistics from './pages/Statistics/Statistics';
import SprintGame from './pages/MiniGamesPage/SprintGame/SprintGame';
import { ApplicationContext } from './components/Context/ApplicationContext';

function App() {
  const { footerVisibility, onSetFooterVisibility } = useContext(ApplicationContext);

  const [pageTitle, setPageTitle] = useState<string>(
    GetTitle(global.location.pathname) ?? 'Easy English',
  );
  useEffect(() => {
    setPageTitle(() => GetTitle(global.location.pathname) ?? 'Easy English');
    onSetFooterVisibility(true);
  }, [useLocation()]);
  return (
    <div className="App">
      <GlobalStyle />

      <Header title={pageTitle} />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/textbook" element={<TextBook />} />
        <Route path="/games" element={<MiniGames />} />
        <Route path="/games/:game" element={<InitialGame />} />
        <Route path="/games/audiochallenge/start" element={<AudioChallengeGame />} />
        <Route path="/games/sprint/start" element={<SprintGame />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>

      {footerVisibility && <Footer />}
    </div>
  );
}

export default App;
