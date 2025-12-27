import React from 'react';
import Application from '../Application/Application';

const Applications = ({data,limit}) => {
   const appsToShow = limit ? data.slice(0, limit) : data;

  
  return (
    <div className=' grid grid-cols-1 gap-10 justify-items-center  mt-10 md:grid-cols-2 lg:grid-cols-4'>

      {
        appsToShow.map(singleData=> <Application key={singleData.id} singleData={singleData}></Application>)
      }

      
    </div>
  );
};

export default Applications;