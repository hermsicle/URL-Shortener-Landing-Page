import './App.css';
import React , {useContext, useState, useRef, useCallback, useEffect} from 'react'
import Boost from './components/boost/Boost';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import Shorten from './components/shorten/Shorten';

import {Context} from './components/Context'
import useEventListener from './components/UseEventListener'
import Results from './components/results/Results';

function App() {

  const {menuOpen} = useContext(Context)
  const {toggleMenu} = useContext(Context)

  function checkViewWidth() {
    if(window.innerWidth >= 1100 && menuOpen) {
      toggleMenu()
    }
  }
  useEventListener('resize', checkViewWidth)
 
  return (
    <div className="App">
      <Header/>
      {
        menuOpen && <Nav/>
      }
      <Hero/>
      <Shorten/>
      <Features/>
      <Boost/>
      <Footer/>
    </div>
  );
}

export default App;
