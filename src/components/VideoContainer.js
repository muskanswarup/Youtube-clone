import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API, API_KEY } from "../constants/youtube";
import VideoCart from "./VideoCart";

const VideoContainer = () => {
  const [video, setVideo] = useState([]); 
  const fetchYtVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      console.log(res?.data?.items);
      setVideo(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchYtVideo();
  }, []);

  return (
    <div className=" grid grid-cols-3">
      {/* <p>Vidoe Containers</p> */}
      {
        video.map((item) =>{
          return(
            <VideoCart key={item.id} item={item}/>
          )
        })
      }

    </div>
  );
};

export default VideoContainer;
