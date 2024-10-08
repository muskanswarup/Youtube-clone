import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";


const RecsVideoContainer = () => {
  return (
    <div className='flex ml-10 mb-2'>
      {/* Image */}
      <div className='w-[40%] border-2'>
      <img
        className="w-44 h-24 rounded-lg object-fill"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNv3OL21X2NDifSV04BxEtfqa5h3YSmPL08A&s"
        alt="Yt_Thumbnail"
      />
      </div>
      {/* Video info */}
      <div className='w-[55%] border-2 text-wrap'>
        <h4>Learn React with FreeCodeCamp</h4>
        <p className='text-sm'>@freecodecamp</p>
        <span className='text-xs'>2.7M views .</span>
        <span className='text-xs'>1 year  ago</span>
      </div>
      {/* Three dots icon */}
      <div className='w-[5%]'>
        <BsThreeDotsVertical/>
      </div>
    </div>
  )
}

export default RecsVideoContainer
