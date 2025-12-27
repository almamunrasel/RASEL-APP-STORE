import React from 'react';
import { Link } from 'react-router';
import download from '../../assets/downloadicon.png';
import star from '../../assets/staricon.png';

const Application = ({ singleData }) => {
  const { image, title, ratingAvg, downloads, id } = singleData;

  return (
    <Link to={`/appdetails/${id}`} className="block">
      <div
        className="
          w-72
          alive-hover
          text-center
          cursor-pointer
          p-6
          bg-white
          rounded-xl
          shadow-md
        "
      >
        <img
          className='h-60 w-60 rounded-xl mx-auto'
          src={image}
          alt={title}
        />

        <p className='mt-3 font-bold'>{title}</p>

        <div className='flex justify-between items-center mt-3'>
          <div className='flex items-center gap-1 bg-gray-100 p-1 rounded'>
            <img className='h-6 w-6' src={download} alt="downloads" />
            <span>{downloads}</span>
          </div>

          <div className='flex items-center gap-1 bg-gray-100 p-1 rounded'>
            <img className='h-5 w-5' src={star} alt="rating" />
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Application;
