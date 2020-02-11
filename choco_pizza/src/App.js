import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import ChocoPizza from './ChocoPizza.js';
import Text from './Text.js';
import Recipie from './Recipie.js';
import Vanessa from './Vanessa.js';
import Footer from './Footer.js';

import logo from './assets/logo.png';
import fbLogo from './assets/fb-icon.png';
import twitLogo from './assets/twit-icon.png';
import gLogo from './assets/gp-icon.png';
import instaLogo from './assets/insta-icon.png';
import flicLogo from './assets/flic-icon.png';
import pintLogo from './assets/pint-icon.png';
import rssLogo from './assets/rss-icon.png';
import mailLogo from './assets/mail-icon.png';
import chocoPizzaPic from './assets/choco-pizza.png';
import printIcon from './assets/print-icon.png';
import vanPic from './assets/van-pic.png';
import smallLogo from './assets/small-logo.png';


function App() {
  return (
    <>
      <Header logo={logo} fbLogo={fbLogo} twitLogo={twitLogo} gLogo={gLogo} instaLogo={instaLogo} flicLogo={flicLogo} pintLogo={pintLogo} rssLogo={rssLogo} mailLogo={mailLogo}/>
      <ChocoPizza printIcon={printIcon} chocoPizzaPic={chocoPizzaPic}/>
      <Text />
      <Recipie />
      <Vanessa vanPic={vanPic}/>
      <Footer smallLogo={smallLogo}/>
    </>
  )
}

export default App;
