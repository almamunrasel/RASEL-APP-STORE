import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/downloadicon.png'
import star from '../../assets/staricon.png'
import review from '../../assets/review.png'
import Chart from '../../Components/Chart/Chart';
import { addToStoredDB, getStoredApp } from '../../utility/addToDB';
import { toast } from 'react-toastify';

const AppDetails = () => {

  const {id}=useParams();
  const appId= parseInt(id);
 
  const data= useLoaderData();
  
  const singleApp = data.find(app => app.id ===appId);
  const {image,title,companyName,downloads,ratingAvg,reviews,size,ratings}= singleApp;
  
  const [installed,setInstalled] = useState(false);
  
  useEffect(()=>{
    const storedApps = getStoredApp();
    setInstalled(storedApps.includes(appId));
  },[appId])

  const handleInstall=(id)=>{

    addToStoredDB(id);
    setInstalled(true);
    toast.success(`${title} installed successfully! 🎉`, {
    position: "top-right",
    autoClose: 2000,
  });

  };
 
  
  return (
    <div className='bg-gray-100 pt-15 w-full '>
          <div className='first-portion flex flex-col md:flex-row gap-15   ml-5 items-center  '>
            <div className=' rounded-2xl w-full md:w-1/3'>
              <img src={image} className='h-65 w-65 rounded-xl p-5 bg-white mx-auto' alt="" />

            </div>
            <div className='w-full md:w-2/3'>
              <div className=''>
                <h1 className='font-bold text-3xl text-blue-950 '>{title}</h1>
                <h1 className='text-[#627382] mt-3'>Developed by <span className='
                text-[#632EE3] font-bold'>{companyName}</span></h1>
                <div className=" border-b border-dotted border-gray-400 my-5"></div>
                <div className='flex items-center  gap-8 mt-4'>
                  <div>
                    <img className='h-8 w-8' src={download} alt="" />
                    <p>Downloads</p>
                    <p className='font-bold text-3xl'>{downloads}</p>
                  </div>
                  <div>
                    <img className='h-8 w-8' src={star} alt="" />
                    <p>Average Ratings</p>
                    <p className='font-bold text-3xl'>{ratingAvg}</p>
                  </div>
                  <div>
                    <img className='h-8 w-8' src={review} alt="" />
                    <p>Total Reviews</p>
                    <p className='font-bold text-3xl'>{reviews}</p>

                  </div>
                </div>


                <button onClick={()=>handleInstall(singleApp.id)}
                 disabled={installed}
                 className={`btn font-semibold mt-4 py-6  transition text-lg rounded-3xl
                  ${installed? 'bg-gray-400 cursor-not-allowed text-white ':'bg-[#00D390] text-white weight-hover hover:bg-green-600'}`}
                 >{installed? 'Installed':`Install Now(${size} MB)`}  </button>
                
              </div>

            </div>


          </div>

           <div className=" border-b border-dotted border-gray-400 my-10"></div>

           <div className='chart-portion'>


            <Chart ratings={ratings} ></Chart>

           </div>
           <div className=" border-b border-dotted border-gray-400 mt-20"></div>
           <div className='p-5 '>
            <p className='font-bold text-xl mb-5'>Description</p>
            <p className='mb-10'>
              <p>
                  This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
              </p>
              <p className='mt-10'>

                A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
                
              </p>
              <p className='mt-10'>
                  For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.



              </p>
              </p>
           </div>



     
    </div>
  );
};

export default AppDetails;