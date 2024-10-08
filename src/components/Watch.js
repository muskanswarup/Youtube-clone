import React from 'react'
import WatchVideoContainer from './WatchVideoContainer'
import RightSideBar from './RightSideBar'

const Watch = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* WatchVideoContainer will control iframe width */}
      <div className="w-full lg:w-[65%] border-2 border-red-800">
        <WatchVideoContainer />
      </div>
      
      {/* RightSideBar takes 30% width on larger screens */}
      <div className="w-full h-full border-2 border-blue-400 lg:w-[55%] ">
        <RightSideBar />
      </div>
    </div>
  )
}

export default Watch
