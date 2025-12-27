import React, { } from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet,  useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AliveLoader from '../../Components/AliveLoader/AliveLoader';

const Root = () => {
  const navigation = useNavigation();
  
  return (
    <div className='max-w-7xl mx-auto relative'>
     <Navbar ></Navbar>
     {navigation.state === 'loading' && <AliveLoader></AliveLoader>}
     <Outlet></Outlet>
     <Footer></Footer>

     <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
    </div>
  );
};

export default Root;