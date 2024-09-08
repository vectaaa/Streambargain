import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import PaymentSection from './components/PaymentSection';
import GetStarted from './components/GetStarted';
import WhatPeopleSay from './components/WhatPeopleSay';
import Faqs from './components/Faqs';
import Refer from './components/Refer';

function App() {
  return (
    <><NavBar />
    <Hero />
    <PaymentSection/>
    <GetStarted/>
    <WhatPeopleSay/>
    <Faqs/>
    <Refer/>
    </>
  );
}

export default App;
