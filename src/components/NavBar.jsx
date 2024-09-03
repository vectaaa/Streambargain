import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <h1 className='w-full text-3xl font-bold text-[#7F56D9]'>StreamBargain</h1>
      <ul className=' hidden md:flex'>
        <li className='p-4'>Howtogetstarted</li>
        <li className='p-4'>FAQs</li>
        <li className='p-4'>ContactUs</li>
        <li className='p-4'>Referrals</li>
        <button className='p-4 bg-purple-700 hover:bg-purple-600 text-white py-1 h-12 my-auto font-bold rounded' >GetStarted</button>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[50%] h-full border-r-gray-900 bg-purple-600 ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <ul className='pt-24 text-white'>
            <li className='p-4 '>Howtogetstarted</li>
            <li className='p-4 ' >FAQs</li>
            <li className='p-4 '>ContactUs</li>
            <li className='p-4 '>Referrals</li>
            <button className='p-3 m-3 bg-purple-700 hover:bg-purple-800 text-white px-4 h-12 my-auto font-bold rounded' >GetStarted</button>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
