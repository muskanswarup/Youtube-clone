import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoCart from "./VideoCart";
import { API_KEY } from "../constants/youtube";
import { Link } from "react-router-dom"; 

const TagList = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const [videos, setVideos] = useState([]);

  const tags = [
    "JavaScript",
    "React",
    "CSS",
    "HTML",
    "FreeCodeCamp",
    "Novels",
    "Reading",
    "Music",
    "Algorithms",
    "SourceCode",
  ];

  // const fetchVideosByTag = async (tag) => {
  //   try {
  //     const searchRes = await axios.get(
  //       `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${tag}&key=${API_KEY}&maxResults=12`
  //     );

  //     const videoIds = searchRes.data.items.map((item) => item.id.videoId).join(",");

  //     const videoRes = await axios.get(
  //       `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${API_KEY}`
  //     );

  //     setVideos(videoRes.data.items);
  //   } catch (error) {
  //     console.error("Error fetching videos with statistics", error);
  //   }
  // };

  const fetchVideosByTag = async (tag) => {
    try {
      const searchRes = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${tag}&key=${API_KEY}&maxResults=12`
      );
  
      const videoIds = searchRes.data.items.map((item) => item.id.videoId).join(",");
  
      const videoRes = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${API_KEY}`
      );
  
      const videosWithIcons = await Promise.all(
        videoRes.data.items.map(async (video) => {
          const channelId = video.snippet.channelId;
          const channelRes = await axios.get(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`
          );
          video.channelIcon = channelRes.data.items[0].snippet.thumbnails.default.url;
          return video;
        })
      );
  
      setVideos(videosWithIcons);
    } catch (error) {
      console.error("Error fetching videos with statistics", error);
    }
  };
  
  useEffect(() => {
    if (selectedTag) {
      fetchVideosByTag(selectedTag);
    }
  }, [selectedTag]);

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(tag)}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          videos.length > 0 && videos.map((video) => {
            return(
              <Link to={`/watch?v=${video.id}`} key={video.id}>
                <VideoCart item={video}/>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};

export default TagList;
