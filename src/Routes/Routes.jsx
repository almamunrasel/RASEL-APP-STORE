import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../pages/AppDetails/AppDetails';
import InstalledApp from '../pages/Installation/InstalledApp';

export const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        path:'/',
        loader:()=>fetch('/appData.json'),
        Component: Home
      },
      {
        path: '/allapps',
        loader:()=>fetch('/appData.json'),
        Component: AllApps
      },
      {
        path:'/appDetails/:id',
        loader: ()=>fetch('/appData.json'),
        Component: AppDetails
        
      },
      {
        path : '/installedApp',
        loader: ()=>fetch('/appData.json'),
        Component: InstalledApp
      }
    ]
  }
])