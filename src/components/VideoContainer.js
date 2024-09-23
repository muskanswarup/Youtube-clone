import React, { useEffect } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API, API_KEY } from "../constants/youtube";
import VideoCart from "./VideoCart";

const VideoContainer = () => {
  const fetchYtVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchYtVideo();
  }, []);

  return (
    <div className="m-4 flex">
      {/* <p>Vidoe Containers</p> */}
      <VideoCart/>
      <VideoCart/>
      <VideoCart/>

    </div>
  );
};

export default VideoContainer;
