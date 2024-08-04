import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] flex lg:justify-center  gap-2 flex-wrap lg:gap-20 items-center p-4 sticky top-0 z-50 bg-white h-[100px] shadow-md shadow-black/30'>
      {/* Left side */}
      <div className='flex items-center gap-16 lg:gap-10'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer justify-start'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl flex lg:text-3xl px-2 cursor-pointer text-center'>
        Graceful <span className='font-bold ml-2 text-orange-600'>Interiors</span>
        </h1>
    
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[100%] mt-8 lg:mt-0 lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search'
        />
      </div>
      {/* Cart button */}
      <button className='bg-orange-600 hover:bg-black/90 duration-300 border-none w-24 text-white hidden md:flex items-center justify-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-300'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500 ease-in-out' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
        Graceful <span className='font-bold text-orange-600'>Interiors</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex cursor-pointer'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex cursor-pointer'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex cursor-pointer'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex cursor-pointer'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex cursor-pointer'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex cursor-pointer'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex cursor-pointer'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;