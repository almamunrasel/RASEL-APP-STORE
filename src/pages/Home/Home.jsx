import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Applications from '../../Components/Applications/Applications';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Applications data={data} limit={8}></Applications>

     <div className='flex items-center justify-center'>
       <button onClick={() => navigate("/allapps")} className='btn weight-hover text-white text-xl mt-10 mb-10 bg-[linear-gradient(125.07deg,_rgba(99,46,227,1)_0%,_rgba(159,98,242,1)_100%)] p-6 rounded-xl'> Show All</button>
     </div>
     

 
    </div>
  );
};

export default Home;