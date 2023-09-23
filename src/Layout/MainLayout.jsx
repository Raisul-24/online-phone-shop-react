// import React from 'react';

import { Outlet } from "react-router-dom";

const MainLayout = () => {
   return (
      <div className="bg-white">
         <h2>Nav</h2>
         <Outlet></Outlet>
      </div>
   );
};

export default MainLayout;