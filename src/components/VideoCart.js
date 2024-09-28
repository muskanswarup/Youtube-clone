import React, { useEffect,useState } from "react";
import Avatar from "react-avatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";
import { API_KEY } from "../constants/youtube";

const VideoCart = ({ item }) => {

  const [ytIcon, setYtIcon] = useState("");
  
  const getYoutubeChannelName = async() => {
    try{
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
      setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getYoutubeChannelName();
  }, []);

  return (
    <div className="cursor-pointer p-4 transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg">
      {/* <p>VIdeo cart?</p> */}
      <img
        className="w-96 h-52 rounded-lg"
        src={item.snippet.thumbnails.high.url}
        alt="Yt_Thumbnail"
      />
      <div className="flex justify-between mt-2">
        {/* Avatar and text */}
        <div className="flex">
          <Avatar
            src={ytIcon}
            size="30"
            round={true}
            className="flex-shrink-0"
          />
          <div className="flex ">
            <div className="ml-2 ">
              <h1 className="font-medium">{item.snippet.title}</h1>
              <p className="text-gray-500">{item.snippet.channelTitle}</p>
              <div className="flex text-gray-500 text-sm">
                <p>
                  {new Intl.NumberFormat("en", { notation: "compact" }).format(
                    item.statistics.viewCount
                  )}{" "}
                  views •
                </p>
                <p className="ml-2">
                  {" "}
                  {formatDistanceToNow(new Date(item.snippet.publishedAt))} ago
                </p>
              </div>
            </div>
            {/* <div className="ml-28">
              <BsThreeDotsVertical />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
