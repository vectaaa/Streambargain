import React from 'react';
import NetflixLogo from '../assets/netflix.svg';
import CrunchyrollLogo from '../assets/crunchyroll.svg';
import PrimeVideoLogo from '../assets/prime.svg';
import YoutubePremiumLogo from '../assets/youtubepremium.svg';
import SpotifyLogo from '../assets/Spotify.svg';
import AppleMusic from '../assets/applemusic.svg';

const Hero = () => {
  return (
    <div className='text-white ' >
      <div className='max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-black text-2xl' > Give up having multiple subscriptions</p>
        <h1 className='text-black font-bold p-2 text-4xl md:py-6 md:text-6xl sm:text-5xl'>All streaming services are available for <h3 className='text-[#7F56D9]'>a single price</h3></h1><br/>
        <p className='text-black text-2xl md:text-4xl sm:text-3xl'>As little as <i className='font-bold'>₦3,500 per month,</i> receive an All-Access Pass to all of your favorite streaming applications.</p>
        <button className='text-white bg-gradient-to-b from-purple-500 to-purple-900 bg-[#7F56D9] hover:bg-purple-800 w-[300px] rounded-md text-xl font-medium my-6 mx-auto py-3'> Gain Access Now</button>
      <div className='flex mx-auto justify-center p-5' >
        <img className='px-2' alt="Apple Music Logo" src={AppleMusic}/>
        <img className='px-2' alt="Apple Music Logo" src={SpotifyLogo}/>
        <img className='px-2' alt="Apple Music Logo" src={PrimeVideoLogo}/>
        <img className='px-2' alt="Apple Music Logo" src={YoutubePremiumLogo}/>
        <img className='px-2' alt="Apple Music Logo" src={CrunchyrollLogo}/>
        <img className='px-2' alt="Apple Music Logo" src={NetflixLogo}/>
      </div>
      </div>
    </div>    
  )
}
 
export default Hero
