import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
// import Feed from "./Feed";


const Body = () => {

  const location = useLocation();
  const hideSideBar = location.pathname.includes('/watch');

  return (
    <div className="flex mt-16">
      {!hideSideBar && <Sidebar/>}
        {/* <Feed/> */}
        <Outlet/>
    </div>
  );
};

export default Body;
