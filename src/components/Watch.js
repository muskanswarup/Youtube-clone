import React from 'react'
import WatchVideoContainer from './WatchVideoContainer'
import RightSideBar from './RightSideBar'

const Watch = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* WatchVideoContainer will control iframe width */}
      <div className="w-full lg:w-[70%] ">
        <WatchVideoContainer />
      </div>
      
      {/* RightSideBar takes 30% width on larger screens */}
      <div className="w-full lg:w-[30%]">
        <RightSideBar />
      </div>
    </div>
  )
}

export default Watch
