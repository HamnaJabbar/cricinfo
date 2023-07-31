
import React from 'react';
import Header from './components/Header';
import ImageCarousel from './components/Carousel';
import AdditionalCards from './components/AdditionalCards'; 
import MegaMenu from './components/MegaMenu'; 

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MegaMenu /> 
      <ImageCarousel />
      <AdditionalCards /> 
    </div>
  );
};

export default App;
