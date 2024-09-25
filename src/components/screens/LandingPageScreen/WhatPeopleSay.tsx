import React from 'react';
import ManImg from '../../../assets/woman.png';
import WomanImg from '../../../assets/man.png';




const CarouselData = [
  {
    name: 'John Carter',
    img: ManImg,
    review: '"The taste is unbelievable! I thought farm-fresh meant good, but this is on another level. The tomatoes are the sweetest I’ve ever had."',
    country: 'South Africa'
  },
  {
    name: 'Jessica Ogwu',
    img: WomanImg,
    review: '"The taste is unbelievable! I thought farm-fresh meant good, but this is on another level. The tomatoes are the sweetest I’ve ever had."',
    country: 'South Africa'
  },
];

const WhatPeopleSay = () => {
  return (
    <div className='w-full bg-gradient-to-b from-purple-500 to-purple-900 py-16 px-4 text-white mx-auto text-center'>
      <div className='max-w-screen-lg mx-auto'>
        <p className='text-3xl md:text-5xl font-semibold mb-4'>What our clients say</p>
        <p className='text-lg md:text-xl mb-8'>
          We take pride in the relationships we build with our clients, and their feedback fuels our passion to deliver the best farm-to-table experience.
        </p>
        <div className='flex flex-col items-center space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:flex-wrap justify-center'>
          {CarouselData.map((p, index) => (
            <div key={index} className='flex flex-col w-full max-w-xs md:max-w-sm lg:max-w-md bg-white border border-[#2f224b] rounded-lg shadow hover:bg-[#2f224b] dark:bg-[#2f224b] dark:hover:bg-[#372955]'>
              <img 
                className='object-cover w-full h-48 md:h-56 rounded-t-lg' 
                src={p.img} 
                alt={`${p.name}'s profile`} 
              />
              <div className='p-4'>
                <p className='mb-2 text-lg md:text-xl tracking-tight text-gray-900 dark:text-white'>{p.review}</p>
                <div>
                  <p className='font-bold text-md'>{p.name}</p>
                  <p className='text-sm'>{p.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;