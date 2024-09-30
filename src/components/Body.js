import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
// import Feed from "./Feed";


const Body = () => {
  return (
    <div className="flex mt-16">
        <Sidebar/>
        {/* <Feed/> */}
        <Outlet/>
    </div>
  );
};

export default Body;
