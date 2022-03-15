import React from 'react';
import DashboardCard from '../UI/DashboardCard';

const DashboardStats = () => {
  return (
    <div className='container grid font-rubik md:grid-cols-2 lg:grid-cols-4 gap-8 md:place-content-center place-items-center mt-16 md:mt-24 lg:mt-32'>
      <DashboardCard
        figures='10.4k'
        className='rounded-xl shadow-lg bg-green-100 w-full py-14 hover:-translate-y-3 transition-all duration-200'
        figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-green-900 text-center'
        type='Users'
        typeStyle='text-xl lg:text-2xl text-green-700 text-center font-medium'
      />

      <DashboardCard
        figures='1.5k'
        className='rounded-xl shadow-lg bg-red-100 w-full py-14 hover:-translate-y-3 transition-all duration-200'
        figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-red-900 text-center'
        type='Restaurants'
        typeStyle='text-xl lg:text-2xl text-red-700 text-center font-medium'
      />

      <DashboardCard
        figures='100'
        className='rounded-xl shadow-lg bg-yellow-100 w-full py-14 hover:-translate-y-3 transition-all duration-200'
        figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-yellow-900 text-center'
        type='Blogs'
        typeStyle='text-xl lg:text-2xl text-yellow-700 text-center font-medium'
      />

      <DashboardCard
        figures='7.2m'
        className='rounded-xl shadow-lg bg-blue-100 w-full py-14 hover:-translate-y-3 transition-all duration-200'
        figureStyle='text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-blue-900 text-center'
        type='Yearly Revenue'
        typeStyle='text-xl lg:text-2xl text-blue-700 text-center font-medium'
      />
    </div>
  );
};

export default DashboardStats;
