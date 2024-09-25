import React from 'react';
import Streamlogo from '../../../assets/streamlogosmall.svg';

const Newletter = () => {
  return (
    <div className='px-4'>
      {/* Section 1 */}
      <div className='mx-auto max-w-screen-lg lg:max-w-screen-xl w-full'>
        <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:justify-between items-center'>
          <div className='flex flex-col justify-center text-center lg:text-left pb-4 w-full lg:w-auto'>
            <h1 className='text-2xl font-bold'>Join our newsletter</h1>
            <p className='text-lg text-purple-300'>We’ll send you a nice letter once per week. No spam.</p>
          </div>
          <div className='flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 w-full lg:w-auto'>
            <input 
              className='w-full lg:w-[400px] bg-gradient-to-r from-grey-500 to-grey-700 border-2 border-grey-800 text-grey py-2 px-4 rounded-md focus:outline-none'
              type='text'
              placeholder='Enter your email'
            />
            <button
              className='w-full lg:w-auto flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-2 px-4 rounded-md lg:ml-2'
              type="button"
            >Subscribe</button>
          </div>
        </div>
        <div className='h-0.5 bg-purple-600 w-full mt-2'></div>
      </div>

      <br/><br/>

      {/* Section 2 */}
      <div className='mx-auto max-w-screen-lg lg:max-w-screen-xl w-full'>
        <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:justify-between items-center'>
          <div className='flex flex-col justify-center text-center lg:text-left pb-4 w-full lg:w-auto'>
            <h1 className='text-2xl font-bold'>Start your incredible experience with Stream Bargain</h1>
            <p className='text-lg text-purple-300'>Join over 4,000+ people to enjoy streaming services payment made easy.</p>
          </div>
          <div className='flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 w-full lg:w-auto'>
            <button
              className='w-full lg:w-auto flex-shrink-0 bg-grey-500 hover:bg-purple-200 border-grey-10 hover:border-grey-700 text-sm border-2 text-black py-2 px-4 rounded-md lg:ml-2'
              type="button"
            >Login</button>
            <button
              className='w-full lg:w-auto flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-2 px-4 rounded-md lg:ml-2'
              type="button"
            >SignUp</button>
          </div>
        </div>
        <div className='h-0.5 bg-purple-600 w-full mt-2'></div>
      </div>

      <br/><br/>

      <div className='flex p-4 justify-between'>
        <p className='text-purple-500'>© 2024 Stream Bargain. All rights reserved.</p>
        <div className='flex ml-4'>
        <img alt='StreamBargain logo' src={Streamlogo}/>
        <p className='text-purple-500'>powered by nexacore innovations limited</p>
        </div>
        

      </div>
    </div>
  )
}

export default Newletter;
