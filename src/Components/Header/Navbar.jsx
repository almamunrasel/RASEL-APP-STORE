import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import herologo from '../../assets/herologo.png'
import github from '../../assets/github.png'
import { RiHome7Fill } from "react-icons/ri";
import { FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";

const Navbar = () => {
  const navigate=useNavigate();
  const links= <>
  <NavLink
  to="/"
  end
  className={({ isActive }) =>
    isActive
      ? "flex items-center gap-1 text-blue-600 font-bold m-2"
      : "flex items-center gap-1 text-gray-600 m-2 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
  }
    >
      <RiHome7Fill size={15} /> Home
    </NavLink>
  
  <NavLink to='/allapps'  end 
          className={({ isActive }) => isActive ? 
         "flex items-center gap-1 text-blue-600 font-bold m-2" 
           : "flex items-center gap-1 text-gray-600 m-2 hover:text-blue-600 transform hover:scale-110 transition-all duration-300" }>

           <FaAppStore size={15} /> Apps</NavLink>


  <NavLink to='/installedApp' end 
           className={({ isActive }) => isActive ? 
         "flex items-center gap-1 text-blue-600 font-bold m-2" 
           : "flex items-center gap-1 text-gray-600 m-2 hover:text-blue-600 transform hover:scale-110 transition-all duration-300" }> <MdInstallDesktop size={15} /> Installation</NavLink>
  
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl font-bold">HERO.IO</a> */}
    <a onClick={() => navigate("/")}  className="btn btn-ghost  font-bold"> <span><img className='h-7 w-7' src={herologo} alt="" /></span>
  <span className="bg-[linear-gradient(125.07deg,#632EE3_0%,#9F62F2_100%)] bg-clip-text text-transparent">
    HERO.IO
  </span>
</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end   ">
    <a href='https://github.com/almamunrasel' target='_blank' className="btn weight-hover bg-[linear-gradient(125.07deg,_rgba(99,46,227,1)_0%,_rgba(159,98,242,1)_100%)] "><span><img src={github} alt="" /></span><span className='text-white'>Contribute</span></a>
  </div>
</div>
  );
};

export default Navbar;