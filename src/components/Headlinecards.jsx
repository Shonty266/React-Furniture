import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>BOGO Furniture Sale</p>
          <p className='px-2'>Ends 8/26!</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 py-1 px-2 rounded-xl font-semibold hover:bg-orange-600 duration-300 border-none hover:text-white '>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Summer BOGO Deals on Furniture</p>
          <p className='px-2'>Through 8/26!</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 py-1 px-2 rounded-xl font-semibold hover:bg-orange-600 duration-300 border-none hover:text-white'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/6969870/pexels-photo-6969870.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Hot BOGO Furniture Deals</p>
          <p className='px-2'>Limited Time Only!</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 py-1 px-2 rounded-xl font-semibold hover:bg-orange-600 duration-300 border-none hover:text-white'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/6186506/pexels-photo-6186506.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;