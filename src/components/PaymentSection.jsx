import React from 'react';
import WithOutStreamImg from '../assets/withoutstream.svg';
import WithStreamImg from '../assets/withstream.svg';

const PaymentSection = () => {
  return (
    <div className='w-full bg-gradient-to-b from-purple-500 to-purple-900 py-16 px-4'>
      <div className='text-white max-w-[1000px] w-full mx-auto text-center flex flex-col'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
          Give up paying for each streaming app separately.
        </h1>
        <br />
        <h1 className='text-lg sm:text-xl'>
          Use Stream Bargain to save over ₦4400 on monthly entertainment subscriptions.
        </h1>
        <br />
      </div>
      <div className='grid max-w-[1040px] mx-auto grid-cols-1 sm:grid-cols-2 gap-4 justify-center'>
        <img
          className='p-4 max-w-[80%] sm:max-w-full mx-auto'
          src={WithOutStreamImg}
          alt='Without Stream Bargain Price card'
        />
        <a href='#'>
          <img
            className='p-4 max-w-[80%] sm:max-w-full mx-auto'
            src={WithStreamImg}
            alt='With Stream Bargain Price card'
          />
        </a>
      </div>
    </div>
  );
}

export default PaymentSection;
