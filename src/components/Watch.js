import React from 'react'
import WatchVideoContainer from './WatchVideoContainer'
// import Comments from './Comments'
import RightSideBar from './RightSideBar'


const Watch = () => {
  return (
    <div>
      <WatchVideoContainer className='w-[70%] border-2 border-yellow-200'/>
      <RightSideBar className='w-[30%]'/>

      {/* <Comments/> */}
      
    </div>
  )
}

export default Watch
