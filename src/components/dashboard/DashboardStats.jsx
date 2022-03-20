import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Restaurants } from '../../context/restaurantsContext';
import DashboardCard from '../UI/DashboardCard';

const DashboardStats = () => {
  const restaurantsCtx = useContext(Restaurants);
  const restaurants = restaurantsCtx.allRestaurants;

  return (
    <div className='container grid gap-8 mt-16 font-rubik md:grid-cols-2 lg:grid-cols-4 md:place-content-center place-items-center md:mt-24 lg:mt-32'>
      <DashboardCard
        figures='10.4k'
        className='w-full transition-all duration-200 bg-green-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
        figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-green-900 text-center'
        type='Users'
        typeStyle='text-xl lg:text-2xl text-green-700 text-center font-medium'
      />

      <Link
        to='/restaurants'
        className='w-full transition-all duration-200 bg-red-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
      >
        <DashboardCard
          figures={restaurants.length}
          figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-red-900 text-center'
          type='Restaurants'
          typeStyle='text-xl lg:text-2xl text-red-700 text-center font-medium'
        />
      </Link>

      <DashboardCard
        figures='100'
        className='w-full transition-all duration-200 bg-yellow-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
        figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-yellow-900 text-center'
        type='Blogs'
        typeStyle='text-xl lg:text-2xl text-yellow-700 text-center font-medium'
      />

      <DashboardCard
        figures='7.2m'
        className='w-full transition-all duration-200 bg-blue-100 shadow-lg rounded-xl py-14 hover:-translate-y-3'
        figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-blue-900 text-center'
        type='Yearly Revenue'
        typeStyle='text-xl lg:text-2xl text-blue-700 text-center font-medium'
      />
    </div>
  );
};

export default DashboardStats;
