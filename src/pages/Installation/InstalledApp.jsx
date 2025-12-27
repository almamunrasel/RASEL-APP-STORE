import React, { useEffect, useState,useRef} from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeFromStoredDb } from '../../utility/addToDB';
import InstalledAppC from '../../Components/InstalledAppC/InstalledAppC';

const InstalledApp = () => {
  const [installedList,setInstalledList]=useState([]);
  const [sort,setSort] = useState('');
  const data=useLoaderData();
  const detailsRef = useRef(null);

  useEffect(()=>{
    const storedAppData= getStoredApp();
    const convertedStoredApp = storedAppData.map(id=>parseInt(id));
    const myAppList =data.filter(app =>convertedStoredApp.includes(app.id));
    setInstalledList(myAppList);

  },[data]);
  const handleSort=(type)=>{
    setSort(type);
    if(type=== 'size'){
      const sortedBySize = [...installedList].sort((a,b)=>a.size-b.size);
      setInstalledList(sortedBySize);
    }
    if(type==='ratings'){
      const sortedByRatings = [...installedList].sort((a,b)=>b.ratingAvg - a.ratingAvg);
      setInstalledList(sortedByRatings);
    }

    detailsRef.current.removeAttribute("open");
  }

  const handleUninstalled = (id)=>{
      removeFromStoredDb(id);
      const storedAppData= getStoredApp();
      const convertedStoredApp = storedAppData.map(id=>parseInt(id));
      const myAppList =data.filter(app =>convertedStoredApp.includes(app.id));
      setInstalledList(myAppList);
     

  }
  return (
    <div className='bg-gray-100'>
     <div className='text-center pt-15'>
      <p className='font-bold text-3xl'>Your Installed Apps</p>
      <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
     </div>
     <div className='mt-10'>
      <div className='flex justify-between p-4 items-center px-8'>
        <p className='font-semibold'>({installedList.length}) Apps found</p>
        <details ref={detailsRef} className="dropdown">
          <summary className="btn m-1">
            Sort By: {sort ? sort : ''}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><button onClick={() => handleSort("size")}>Size</button></li>
            <li><button onClick={() => handleSort("ratings")}>Ratings</button></li>
          </ul>
</details>

      </div>
     </div>

     <div className='pb-10'>
         {
          installedList.map(app=><InstalledAppC key={app.id} handleUninstalled={handleUninstalled} app={app}></InstalledAppC>)
         }


     </div>









    </div>
  );
};

export default InstalledApp;