import React from 'react';
import WithOutStreamImg from '../assets/withoutstream.svg';
import WithStreamImg from '../assets/withstream.svg';

const PaymentSection = () => {
  return (
    <div className='w-full bg-purple-600 py-16 px-4'>
      <div className='flex max-w-[1240px] mx-auto md:grid-cols 2'>
        <img className='p-3' src={WithOutStreamImg} alt='Without Stream Bargain Price card'/>
        <img className='p-3' src={WithStreamImg} alt='Without Stream Bargain Price card'/>
      </div>
    </div>
  )
}

export default PaymentSection;
