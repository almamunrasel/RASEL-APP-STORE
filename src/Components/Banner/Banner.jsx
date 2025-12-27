import React from 'react';
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/appstore.png'
import hero from '../../assets/hero.png'

const Banner = () => {
  return (
    <div className='bg-gray-50'>
      <div className='text-center font-bold text-5xl pt-20 '>
        We Build <br /> <span className='bg-[linear-gradient(125.07deg,#632EE3_0%,#9F62F2_100%)] bg-clip-text text-transparent'>Productive </span>Apps

      </div>
      <div>
        <p className='text-[#627382] text-center p-4 md: mx-25 '>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />   Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      </div>
      <div className='flex justify-center gap-5 '>
        <button className='btn font-bold text-xl'><span><img src={playstore} alt="" /></span>Google Play</button>
        <button className='btn font-bold text-xl'><img src={appstore} alt="" />App Store</button>
      </div>

      <div className='flex justify-center mt-10 h-80 '>

        <img src={hero} alt="" />

      </div>

      <div className='w-full bg-[linear-gradient(125.07deg,_rgba(99,46,227,1)_0%,_rgba(159,98,242,1)_100%)] text-white p-10 '>
        <div>
          <p className='text-center font-semibold text-3xl'>Trusted by Millions, Built for You</p>
       </div>

       <div className='flex justify-center gap-10 mt-10'>
              <div>
                <p className='text-xs ml-4'>Total Downloads</p>
                <p className='font-bold text-5xl mt-3'>29.6M</p>
                <p className='text-xs mt-3'>21% more than last month</p>

              </div>
              <div>
                <p className='text-xs ml-4'>Total Reviews</p>
                <p className='font-bold text-5xl mt-3'>906k</p>
                <p className='text-xs mt-3'>46% more than last month</p>

              </div>
              <div>
                <p className='text-xs ml-4'>Active Apps</p>
                <p className='font-bold text-5xl mt-3'>132+</p>
                <p className='text-xs mt-3'>31 More Will Launch</p>


              </div>
       </div>

      </div>

      <div>
        <div className='text-center mt-10'>
          <p className='font-bold text-3xl'>Trending Apps</p>
        <p className='text-[#627382] p-2'>Explore All Trending Apps on the Market developed by us</p>
        </div>
      </div>
      
      
    </div>
  );
};

export default Banner;