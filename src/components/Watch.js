import React from 'react'
import WatchVideoContainer from './WatchVideoContainer'
import RightSideBar from './RightSideBar'
import { useLocation } from 'react-router-dom'

const Watch = () => {
  const location = useLocation();
  // console.log(location);
  const queryParams = new URLSearchParams(location.search);
  // console.log(queryParams);
  const videoId = queryParams.get('v');
  // console.log(videoId);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* WatchVideoContainer will control iframe width */}
      <div className="w-full lg:w-[65%] ">
        <WatchVideoContainer videoId={videoId}/>
      </div>
      
      {/* RightSideBar takes 30% width on larger screens */}
      <div className="w-full h-full lg:w-[55%] mt-16">
        <RightSideBar videoId={videoId} />
      </div>
    </div>
  )
}

export default Watch
