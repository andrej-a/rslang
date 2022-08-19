import React, { useState } from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { MainPageContent } from './MainPageContent';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainPageContent />
      <Footer />
    </>
  );
};

export default MainPage;
