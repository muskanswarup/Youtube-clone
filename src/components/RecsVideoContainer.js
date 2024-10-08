import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { API_KEY } from "../constants/youtube";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
const RecsVideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=20&key=${API_KEY}`
      );
      console.log(res.data.items);

      const fetchedVideos = res.data.items.map((item) => ({
        id: item.id,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        views: item.statistics.viewCount,
        thumbnailUrl: item.snippet.thumbnails.high.url,
        // timestamp: item.snippet.publishedAt
        timestamp: formatDistanceToNow(new Date(item.snippet.publishedAt), {
          addSuffix: true,
        }),
      }));

      setVideos(fetchedVideos);
      // console.log(fetchedVideos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideo();
  });

  return (
    <div>
      {videos.map((video, index) => (
        <Link key={index} to={`/watch?v=${video.id}`} className="flex ml-10 mb-2 transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer">
          {/* Image */}
          <div className="w-[40%] ml-2">
            <img
              className="w-44 h-24 rounded-lg object-fill"
              src={video.thumbnailUrl}
              alt="Yt_Thumbnail"
            />
          </div>
          {/* Video info */}
          <div className="w-[55%]  text-wrap  px-2 py-1">
            <p className="text-sm font-medium ">{video.title}</p>
            <p className="text-xs  text-gray-500">{video.channelTitle}</p>
            <span className="text-xs  text-gray-500">
            {new Intl.NumberFormat("en", {
                  notation: "compact",
                }).format(video.views)}{" . "}
            </span>
            <span className="text-xs  text-gray-500">{video.timestamp}</span>
          </div>
          {/* Three dots icon */}
          <div className="w-[5%] mt-1 mr-6">
            <BsThreeDotsVertical />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecsVideoContainer;
