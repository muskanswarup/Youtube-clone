import React from 'react'
import TagList from './TagList';
import VideoContainer from './VideoContainer';
import { useSelector } from 'react-redux';


const Feed = () => {
  const open = useSelector((store) => store.app.open);
  return (
    <div className={`mt-6 ${open ? 'ml-64' : 'ml-28'} transition-all duration-300`}>
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
