import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDotsVertical, BsEmojiSunglasses } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
// import {LuSendHorizontal} from "react-icons/lu";
import { LuSendHorizonal } from "react-icons/lu";
// import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Avatar from "react-avatar";

const Chat = () => {
  return (
    <div className="border-2 border-black ml-12 mb-2 px-2 py-2 h-fit mr-10">
      {/* Topmost header */}
      <div className="flex justify-between mt-1 mr-4 border-2 border-pink-600">
        <div className="flex items-center">
          <h1 className="mr-2">Top Chat</h1>
          <IoIosArrowDown />
        </div>

        <div className="flex items-center">
          <BsThreeDotsVertical className="mr-2" />
          <RxCross1 />
        </div>
      </div>

      <div className="h-[28rem]">CHATS</div>

      {/* Bottommost part input and avatar */}
      <div className="flex items-center">
        <Avatar
          src={`https://avatarfiles.alphacoders.com/231/231277.jpg`}
          size="30"
          round={true}
        />
        {/* Input with emoji inside */}
        <div className="flex items-center border border-gray-400 rounded-lg w-full px-3 ml-2">
          <input
            placeholder="Enter message ..."
            className="w-full h-10 pl-3 outline-none"
          />
          <BsEmojiSunglasses size={20} className="text-gray-500 ml-2 cursor-pointer" />
        </div>
        {/* Payment icon */}
        <div className="border border-gray-400 rounded-lg ml-2 p-2 cursor-pointer">
          {/* <RiMoneyDollarCircleFill size={24} className="text-green-600" /> */}
          <LuSendHorizonal size={24} className="text-green-600" />

        </div>
      </div>
    </div>
  );
};

export default Chat;
