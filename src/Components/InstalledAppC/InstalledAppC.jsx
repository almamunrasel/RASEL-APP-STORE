import React from 'react';
import download from '../../assets/downloadicon.png'
import star from '../../assets/staricon.png'

const InstalledAppC = ({app,handleUninstalled}) => {
  console.log(app);
  return (
    <div className='bg-white flex justify-between items-center  rounded-2xl px-8 mt-5 mx-20'>
      <div className='flex gap-5 items-center'>
        <div>
          <img className='h-30 w-30 p-3' src={app.image} alt="" />
        </div>
        <div>
          <p className='font-bold'>{app.title}</p>
          <div className='flex gap-3 mt-3 text-[#627382] text-xs'>
            <div className='flex gap-1'>
             <img className='h-4 w-4' src={download} alt="" />
             <span>{app.downloads}</span>
            </div>
            <div className='flex gap-1'>
               <img className='h-4 w-4' src={star} alt="" />
               <span>{app.ratingAvg}</span>
            </div>
            <div>
              {app.size}MB
            </div>

            

          </div>
        </div>


      </div>
      <div>
         <button onClick={()=>handleUninstalled(app.id)}   className='btn bg-[#00D390] text-white font-semibold rounded-xl mt-4'>Uninstall</button>
      </div>
      
     
      
      
    </div>
  );
};

export default InstalledAppC;