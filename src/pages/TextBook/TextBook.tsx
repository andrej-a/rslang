import React, { useState } from 'react';
import { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TextBookContent from './TextBookContent';

const TextBook = () => {
  return (
    <>
      <Header title='TextBook' />
      <TextBookContent/>
    </>
  );
   
};

export default TextBook;