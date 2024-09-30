import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Avatar from "react-avatar";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoMdShareAlt, IoMdDownload } from "react-icons/io";
import axios from "axios";
import { API_KEY } from "../constants/youtube";

const Watch = () => {
  const [singleVideo, setSingleVideo] = useState("");

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const getSingleVideo = async () => {
    try{
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
      // console.log("res is : " , res);
      setSingleVideo(res?.data?.items[0]);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getSingleVideo();
  } , []);

  console.log(singleVideo);

  const open = useSelector((store) => store.app.open);
  // console.log(item);
  return (
    // Main div
    <div className="mt-6">
      <div
        className={`mt-6 ${
          open ? "ml-64" : "ml-32"
        } transition-all duration-300`}
      >
        {/* Left div */}
        <div className="">
          <iframe
            className="rounded-lg"
            width="860"
            height="490"
            src={`https://www.youtube.com/embed/${videoId}?si=R323baOfW8K2_xb3`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          {/* Video info */}
          <div className="mt-2 px-2 my-4">
            <h1 className="font-bold text-lg">
             {singleVideo.snippet.title}
            </h1>

            {/* Channel info and buttons */}
            <div className="flex justify-between items-center my-2">
              {/* Channel Info */}
              <div className="flex items-center">
                <Avatar
                  src={singleVideo.snippet.thumbnails.high.url}
                  size="30"
                  round={true}
                />
                {/* Channel name and subs */}
                <div className="mx-2">
                  <p className="text-sm font-semibold">{singleVideo.snippet.channelTitle}</p>
                  <p className="text-xs text-gray-500">2.09M subscribers</p>
                </div>
                <button className="bg-black text-white rounded-full px-4 py-2 ml-4">
                  Subscribe
                </button>
              </div>

              {/* Icons - Like, Share, Download */}
              <div className="flex">
                {/* Like dislike icons */}
                <div className="flex items-center border border-gray-300 rounded-full p-2 mr-3">
                  <AiFillLike size={20} className="m-1 hover:cursor-pointer" />
                  <span className="mr-4 mx-1 border-r-2 border-gray-300 px-1">
                  {new Intl.NumberFormat("en", { notation: "compact" }).format(
                    singleVideo.statistics.likeCount
                  )}{" "}
                  </span>
                  <AiFillDislike size={20} className="m-1 hover:cursor-pointer" />
                </div>
                {/* Share btn */}
                <button className="flex items-center border border-gray-300 rounded-full p-2 mr-3">
                  <IoMdShareAlt size={20} />
                  <span className="mx-2">Share</span>
                </button>
                {/* Download btn */}
                <button className="flex items-center border border-gray-300 rounded-full p-2">
                  <IoMdDownload />
                  <span className="mx-2">Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
