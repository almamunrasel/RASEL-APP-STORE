import React, { useState } from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
  const [appActive,setAppActive]=useState(false);
  return (
    <div className='max-w-7xl mx-auto'>
     <Navbar appActive={appActive} setAppActive={setAppActive}></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
      
    </div>
  );
};

export default Root;