import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import UiSec from './components/UiSec/UiSec';
import Works from './components/Works/Works';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      <Header />
      <Intro />
      <UiSec />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
