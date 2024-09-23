import React from 'react'
import TagList from './TagList';
import VideoContainer from './VideoContainer';


const Feed = () => {
  return (
    <div className='mt-24'>
        {/* Tags */}
        <div  >
            <TagList/>
        </div>
      
        {/* Videos */}
        <div>
            <VideoContainer/>
        </div>

    </div>
  )
}

export default Feed;
