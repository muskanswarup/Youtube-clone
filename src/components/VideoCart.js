import React from "react";
import Avatar from "react-avatar";
import { BsThreeDotsVertical } from "react-icons/bs";

const VideoCart = () => {
  return (
    <div className="cursor-pointer p-4 transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg">
      {/* <p>VIdeo cart?</p> */}
      <img
        className="w-96 h-52 rounded-lg"
        src="https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg"
        alt="Yt_Thumbnail"
      />
      <div className="flex justify-between mt-2">
        {/* Avatar and text */}
        <div className="flex">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6wCUSmJEK9kC5KVqmQczHMH3OMcc_9BTTQ&s"
            size={40}
            round={true}
          />
          <div className="flex ">
            <div className="ml-2 ">
              <h1 className="font-medium">Master React with Elon Musk</h1>
              <p className="text-gray-500">Musk OnEl</p>
              <div className="flex text-gray-500">
                <p>30k views •</p>
                <p className="ml-2">6 years ago</p>
              </div>
            </div>
            <div className="ml-28">
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
