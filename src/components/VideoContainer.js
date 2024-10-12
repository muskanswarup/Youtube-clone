// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { YOUTUBE_VIDEO_API } from "../constants/youtube";
// import VideoCart from "./VideoCart";
// import { Link } from "react-router-dom";

// const VideoContainer = () => {
//   const [video, setVideo] = useState([]);
//   const fetchYtVideo = async () => {
//     try {
//       const res = await axios.get(YOUTUBE_VIDEO_API);
//       // console.log(res?.data?.items);
//       setVideo(res?.data?.items);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchYtVideo();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
//       {video.map((item) => {
//         return (
//           <Link to={`/watch?v=${item.id}`} key={item.id}>
//             <VideoCart  item={item} />
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default VideoContainer;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API , API_KEY} from "../constants/youtube";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  
  const fetchYtVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      
      const videos = res?.data?.items;

      // Get unique channelIds from the videos
      const channelIds = [...new Set(videos.map(video => video.snippet.channelId))];

      // Fetch channel details for all unique channel IDs
      const channelsRes = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(',')}&key=${API_KEY}`
      );

      const channels = channelsRes?.data?.items;

      // Map channel info to video items
      const updatedVideos = videos.map(video => {
        const channel = channels.find(c => c.id === video.snippet.channelId);
        return {
          ...video,
          channelIcon: channel?.snippet?.thumbnails?.high?.url,
        };
      });

      setVideo(updatedVideos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchYtVideo();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {video.map((item) => (
        <Link to={`/watch?v=${item.id}`} key={item.id}>
          <VideoCart item={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
