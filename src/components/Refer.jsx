import React from 'react';
import ReferralCard from '../assets/referwralcard.svg';

const Refer = () => {
  return (
    <div className='w-full bg-gradient-to-b from-purple-500 to-purple-900 py-16 px-4 text-center items-center justify-center'>
      <h1 className='text-white text-3xl md:text-5xl font-semibold mb-4'>Refer and earn ₦150</h1>
      <h1 className='text-white text-lg md:text-xl mb-8'>We pay you 150 Naira every time anyone subscribes using your referral link</h1>
      <img alt='Referral Card' src={ReferralCard}/>
      
    </div>
  )
}

export default Refer;
