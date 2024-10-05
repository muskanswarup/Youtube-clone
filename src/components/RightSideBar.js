import React from "react";
import Chat from "./Chat";

const RightSideBar = () => {
  return (
    <div className="
      sm:hidden md:hidden 
    fixed top-20 right-10 border border-black p-2 rounded-md ">
      <Chat/>

      {/* <p>RIGHT SIDE BAR</p> */}
    </div>
  );
};

export default RightSideBar;
