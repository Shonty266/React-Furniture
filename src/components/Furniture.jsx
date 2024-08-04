import React, { useState } from 'react';
import { data } from '../data/data.js';

const Furniture = () => {
  //   console.log(data);
  const [furnitures, setFurnitures] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFurnitures(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };



  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Furniture Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFurnitures(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('tables')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Tables
            </button>
            <button
  onClick={() => filterType('armchairs')}
  className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white active:bg-orange-600 active:shadow-inner'
>
  Armchairs
</button>



            <button
              onClick={() => filterType('sofas')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Sofas
            </button>
            <button
              onClick={() => filterType('cabinets')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Cabinets
            </button>
          </div>
        </div>

        {/* Filter Price */}
        
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {furnitures.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Furniture;