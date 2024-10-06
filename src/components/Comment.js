import React from "react";
import Avatar from "react-avatar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Comment = ({ avatarUrl, username, timestamp, text, likes, replies }) => {
  return (
    <div className="flex items-start mb-4  w-full xl:w-[1000px]">
      <Avatar
        src={avatarUrl || undefined}
        name={username}
        size="35"
        round={true}
      />

      <div className="ml-3 ">
        {/* Comment header */}
        <div className="text-sm">
          <span className="font-semibold">{username}</span>
          <span className="text-gray-500 ml-2 text-xs">{timestamp}</span>
        </div>

        {/* Comment body */}

        <p className="text-sm mt-1 leading-relaxed break-words ">
          {text}
        </p>
        {/* Likes dislikes */}
        <div className="flex items-center px-2 py-1">
          <AiOutlineLike size={20} className="mr-1 cursor-pointer" />
          {likes > 0 && <span className="text-sm">{likes}</span>}
          <AiOutlineDislike size={20} className="ml-2 cursor-pointer" />
        </div>

        {replies > 0 && (
          <div className="text-blue text-md flex items-center mt-1 mr-2 text-blue-700 cursor-pointer">
            <IoIosArrowDown />
            <span>{replies} replies</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
