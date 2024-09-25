import React from 'react';
import NetflixLogo from '../../../assets/netflix.svg';
import CrunchyrollLogo from '../../../assets/crunchyroll.svg';
import PrimeVideoLogo from '../../../assets/prime.svg';
import YoutubePremiumLogo from '../../../assets/youtubepremium.svg';
import SpotifyLogo from '../../../assets/Spotify.svg';
import AppleMusic from '../../../assets/applemusic.svg';

const Hero = () => {
  return (
    <div className='text-white bg-gradient-to-b  h-screen flex flex-col justify-center'>
      <div className='max-w-screen-xl mx-auto text-center px-4'>
        <p className='text-black text-xl md:text-2xl'>
          Give up having multiple subscriptions
        </p>
        <h1 className='text-black font-bold text-3xl md:text-5xl lg:text-6xl py-2'>
          All streaming services are available for{' '}
          <span className='text-[#7F56D9]'>a single price</span>
        </h1>
        <p className='text-black text-xl md:text-3xl lg:text-4xl py-4'>
          As little as{' '}
          <span className='font-bold'>₦3,500 per month,</span> receive an
          All-Access Pass to all of your favorite streaming applications.
        </p>
        <button className='text-white bg-[#7F56D9] hover:bg-purple-800 w-full sm:w-[300px] rounded-md text-lg font-medium my-6 mx-auto py-3 transition-colors duration-300'>
          Gain Access Now
        </button>
        <div className='mx-auto flex flex-wrap justify-center gap-4 mt-8'>
          <img className='w-[150px] h-auto p-2' alt="Apple Music Logo" src={AppleMusic} />
          <img className='w-[150px] h-auto p-2' alt="Spotify Logo" src={SpotifyLogo} />
          <img className='w-[150px] h-auto p-2' alt="Prime Video Logo" src={PrimeVideoLogo} />
          <img className='w-[150px] h-auto p-2' alt="Youtube Premium Logo" src={YoutubePremiumLogo} />
          <img className='w-[150px] h-auto p-2' alt="CrunchyRoll Logo" src={CrunchyrollLogo} />
          <img className='w-[150px] h-auto p-2' alt="Netflix Logo" src={NetflixLogo} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
