import React from 'react';
import { Directory } from '../../components/directory/Directory';
import { Outlet } from 'react-router-dom';
export const Home = () => {
 
  return (
    <div>
     <Directory />
      <Outlet />
     
    </div>
  );
};
