import React from 'react';
import ReferralCard from '../../../assets/referwralcard.svg';
import TestimonialCard from '../../../assets/testimonialcard.svg';
import NavBar from './NavBar.tsx';

const Refer = () => {
  return (
    <div className='w-full bg-gradient-to-b from-purple-500 to-purple-900 py-16 px-4 text-center items-center justify-center mx-auto'>
      <h1 className='text-white text-3xl md:text-5xl font-semibold mb-4'>Refer and earn ₦150</h1>
      <h1 className='text-white text-lg md:text-xl mb-8'>We pay you 150 Naira every time anyone subscribes using your referral link</h1>
      <div className='flex justify-center'>
        <img alt='Referral Card' src={ReferralCard}/>
      </div>      
      <button  className='text-white bg-gradient-to-b from-purple-500 to-purple-900 hover:bg-purple-800 w-[200px] sm:w-[250px] md:w-[300px] rounded-md text-lg sm:text-xl font-medium my-6 mx-auto py-2 sm:py-3'>
          <a href='/get-started'>
            Get Started Now
            </a>
     </button>
     <div className='flex justify-center'>
        <img alt='Testimonial card' src={TestimonialCard}/>
     </div>
    </div>
  )
}

export default Refer;
