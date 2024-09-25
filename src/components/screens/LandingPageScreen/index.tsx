import React from 'react'
import NavBar from './NavBar.tsx';
import Hero from './Hero.tsx';
import PaymentSection from './PaymentSection.tsx';
import GetStarted from './GetStarted.tsx';
import WhatPeopleSay from './WhatPeopleSay.tsx';
import Faqs from './Faqs.tsx';
import Refer from './Refer.tsx';
import ContactUs from './ContactUs.tsx';
import Newletter from './Newletter.tsx';

function LandingPage() {
  return (
    <><NavBar />
    <Hero />
   <PaymentSection/>
   <GetStarted/>
   <WhatPeopleSay/>
   <Faqs/>
   <Refer/>
   <ContactUs/>
   <Newletter/> 
   </>
  )
}

export default LandingPage;
