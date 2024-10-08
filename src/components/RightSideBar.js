import React from "react";
import RecsVideoContainer from "./RecsVideoContainer";


const RightSideBar = ({videoId}) => {
  console.log(videoId);
 
  return (
    <div className="mt-6 top-10 right-12   ">
     <RecsVideoContainer/>
    </div>
  );
};

export default RightSideBar;
