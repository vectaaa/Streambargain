import React from 'react';
import Frame1 from '../assets/frameone.svg';
import Frame2 from '../assets/frametwo.svg';
import Frame3 from '../assets/framethree.svg';

const GetStarted = () => {
  return (
    <div className='text-black w-full px-4'>
      <div className='max-w-[1000px] w-full mx-auto text-center flex flex-col justify-center'>
        <p className='text-3xl sm:text-4xl md:text-5xl mt-[50px] sm:mt-[70px] md:mt-[100px]'>
          <b>Is this even</b> possible?
        </p>
        <br />
        <p className='text-base sm:text-lg md:text-xl'>
          Yes it is! How we make this work is we link five people to one Premium/Family account, giving everyone their own profile and unlimited access to all the content. No setup from you required - we take care of all the details. Simply login and enjoy!
        </p>
        <p className='text-2xl sm:text-3xl md:text-4xl mt-[50px] sm:mt-[70px] md:mt-[100px]'>
          <b>How to Get</b> Started
        </p>
        <p className='text-base sm:text-lg md:text-xl mt-[20px] sm:mt-[30px] md:mt-[40px]'>
          Within moments, receive your login details, and you're all set to dive into a world of unlimited entertainment hassle-free.
        </p>
        <br />
        <div className='w-full flex flex-col sm:flex-row md:flex-row justify-center items-center mx-auto'>
          <img className='p-2 max-w-[80%] sm:max-w-[45%] md:max-w-[30%]' src={Frame1} alt='Start your membership' />
          <img className='p-2 max-w-[80%] sm:max-w-[45%] md:max-w-[30%]' src={Frame2} alt='Your customized profile' />
          <img className='p-2 max-w-[80%] sm:max-w-[45%] md:max-w-[30%]' src={Frame3} alt='Receive your login details' />
        </div>
        <br />
        <button className='text-white bg-gradient-to-b from-purple-500 to-purple-900 hover:bg-purple-800 w-[200px] sm:w-[250px] md:w-[300px] rounded-md text-lg sm:text-xl font-medium my-6 mx-auto py-2 sm:py-3'>
          Get Started Now
        </button>
        <br />
      </div>
    </div>
  );
}

export default GetStarted;
