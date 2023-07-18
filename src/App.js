import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import UiSec from './components/UiSec/UiSec';
import Works from './components/Works/Works';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div>
      <Header />
      <Intro />
      <UiSec />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
