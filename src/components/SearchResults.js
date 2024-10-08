import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";

const SearchResults = () => {
  const open = useSelector((store) => store.app.open);

  return (
    <div
      className={`mt-6 ${
        open ? "ml-64" : "ml-28"
      } transition-all duration-300 flex mb-10 `}
    >
      {/* Video thumbnail */}
      <div className="w-[35%] rounded-xl">
        <img
          className="w-full h-64 rounded-xl object-fill"
          //   src={video.thumbnailUrl}
          src="https://static-cse.canva.com/blob/1741259/1600w-wK95f3XNRaM.jpg"
          alt="Yt_Thumbnail"
        />
      </div>
      {/* Video info */}
      <div className="w-[55%] px-2 py-3 leading-7 ml-5">
        <p className="font-bold ">
          Build and Deploy a Modern YouTube Clone Application in React JS with
          Material UI 5 | RapidAPI
        </p>
        <span className="text-xs text-gray-500 mr-2">639K</span>
        <span className="text-xs text-gray-500">2 years</span>

        {/* Channel name with logo */}
       <div className="flex items-center mt-2">
       <Avatar
          src={`https://avatarfiles.alphacoders.com/231/231277.jpg`}
          size={24}
          round={true}
        />
        <span className="text-sm text-gray-500 ml-3">JavaScript Mastery</span>
       </div>

        {/* Decription first line */}
        <p className="text-xs text-gray-500 overflow-hidden mt-4">
          Learn How to crate YouTube clone using React JS and YouTube Data API.
          Build website like YouTube with React JS. React JS ...
        </p>
      </div>

      {/* Three dots icon */}
      <div className="w-[5%] mt-3">
        <BsThreeDotsVertical size={20} />
      </div>
    </div>
  );
};

export default SearchResults;
