import React from 'react';
import download from '../../assets/downloadicon.png'
import star from '../../assets/staricon.png'

const InstalledAppC = ({app,handleUninstalled}) => {
  console.log(app);
  return (
    <div className='bg-white flex flex-col md:flex-row justify-between items-center  rounded-2xl px-2 md:px-8 mt-5 mx-10 md:mx-20'>
      <div className='flex gap-6  md:gap-5 items-center w-full'>
        <div className='flex justify-centermd:justify-start'>
          <img className='h-30 w-30 p-3 ' src={app.image} alt="" />
        </div>
       <div className="flex-1">
  <p className='font-bold'>{app.title}</p>
  <div className='flex flex-col md:flex-row gap-3 mt-3 text-[#627382] text-xs'>
    <div className='flex gap-2 md:gap-1'>
      <img className='h-4 w-4' src={download} alt="" />
      <span>{app.downloads}</span>
    </div>
    <div className='flex gap-2 md:gap-1'>
      <img className='h-4 w-4' src={star} alt="" />
      <span>{app.ratingAvg}</span>
    </div>
    <div>
      {app.size}MB
    </div>
  </div>
</div>


      </div>
      <div className="w-full md:w-auto flex justify-center md:justify-end pb-4 md:pb-0">
         <button onClick={()=>handleUninstalled(app.id)}   className='btn weight-hover bg-[#00D390] text-white font-semibold rounded-xl mt-4'>Uninstall</button>
      </div>
      
     
      
      
    </div>
  );
};

export default InstalledAppC;