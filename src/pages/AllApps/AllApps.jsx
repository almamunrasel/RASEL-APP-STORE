import React, { useState } from 'react';
import Applications from '../../Components/Applications/Applications';
import { useLoaderData } from 'react-router';
import NotFound from '../../Components/NotFound/NotFound';

const AllApps = () => {
   const data= useLoaderData();
   const [searchText,setSearchText]=useState('');
   
   const filteredApps =data.filter(app=>
    app.title.toLowerCase().includes(searchText.toLowerCase()) ||
    app.companyName?.toLowerCase().includes(searchText.toLowerCase())
   )
  return (
    <div>
      <div>
        <div className='text-center mt-10'>
          <p className='font-bold text-3xl'>Our All Applications</p>
        <p className='text-[#627382] p-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>
        <div className='flex justify-between items-center mt-10 '>
          <div>
            <p className='font-semibold text-xl'>{filteredApps.length} Apps Found</p>

          </div>
       <div>
           <label className="input">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search"  placeholder="Search Apps..." value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
            </label>

          </div>
        </div>
        <div>
          {
            filteredApps.length===0? <NotFound onShowAll={()=>setSearchText('')}></NotFound> :  <Applications data={filteredApps}></Applications>
          }
          
        </div>
      </div>
      
    </div>
  );
};

export default AllApps;