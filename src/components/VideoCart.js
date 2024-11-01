
import React from "react";
import { formatDistanceToNow } from "date-fns";

const VideoCart = ({ item }) => {
  // Channel Icon is now passed as part of `item` from VideoContainer
  const ytIcon = item?.channelIcon;  
  const videoThumbnail = item.snippet.thumbnails.high.url;
  const videoTitle = item.snippet.title;
  const channelTitle = item.snippet.channelTitle;
  // const publishedAt = new Date(item.snippet.publishedAt).toLocaleDateString();
  const publishedAt = new Date(item.snippet.publishedAt);
  const viewCount = item.statistics?.viewCount || "N/A";  // Fallback if not available

  return (
    <div className="p-2">
      {/* Video Thumbnail */}
      <img
        src={videoThumbnail}
        alt="Video Thumbnail"
        className="w-full h-40 rounded-lg object-cover"
      />

      {/* Video Info */}
      <div className="mt-2">
        {/* Video Title */}
        <h3 className="font-bold text-sm truncate">{videoTitle}</h3>

        {/* Channel Info */}
        <div className="flex items-center mt-2">
          {/* Channel Icon */}
          <img
            src={ytIcon}
            alt="Channel Icon"
            className="w-8 h-8 rounded-full mr-2"
          />
          {/* Channel Title */}
          <p className="text-sm text-gray-500">{channelTitle}</p>
        </div>

        {/* Video Stats */}
        <div className="text-gray-500 text-xs mt-1">
          <span>
          {new Intl.NumberFormat("en", {
                  notation: "compact",
                }).format(viewCount)}{" . "}
             views</span> • <span>{formatDistanceToNow(publishedAt)} ago</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
