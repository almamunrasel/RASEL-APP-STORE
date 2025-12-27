import React from 'react';
import Navbar from '../../Components/Header/Navbar';

import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router';

import apperror from '../../assets/App-Error.png'

const AppErrorPage = () => {
 const navigate=useNavigate();
  return (
    <div className='max-w-7xl mx-auto'>
      
    
      <div className='flex justify-center pt-30 pb-10 bg-gray-100'>
        <img src={apperror} alt="" />


      </div>
      <div className='bg-gray-100 justify-items-center'>
        <p className='text-4xl font-bold'>Oops,app not found</p>
        <p>The app you are looking for is not available</p>
        <div className="flex justify-center items-center mt-10 pb-10">
  <button onClick={() => navigate("/allapps")} className="btn weight-hover bg-[linear-gradient(125.07deg,_rgba(99,46,227,1)_0%,_rgba(159,98,242,1)_100%)] text-white">
    Go Back!
  </button>

      </div>
      </div>
      
    </div>
  );
};

export default AppErrorPage;