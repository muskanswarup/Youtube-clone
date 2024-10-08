import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Avatar from "react-avatar";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
// import { IoMdShareAlt, IoMdDownload } from "react-icons/io";
import { MdOutlineSort, MdOutlineFileDownload } from "react-icons/md";
import axios from "axios";
import { API_KEY } from "../constants/youtube";
import Comments from "./Comments";

const WatchVideoContainer = () => {
  const [singleVideo, setSingleVideo] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState("");
  const description = singleVideo?.snippet?.description || "";
  const firstLine = description?.split("\n")[0] || "";

  const formatDescription = (text) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line.split(urlPattern).map((part, i) =>
          urlPattern.test(part) ? (
            <a
              href={part}
              key={i}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {part}
            </a>
          ) : (
            part
          )
        )}
        <br />
      </span>
    ));
  };

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      const videoData = res?.data?.items[0];
      setSingleVideo(videoData);

      if (videoData?.snippet?.channelId) {
        getChannelDetails(videoData.snippet.channelId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getChannelDetails = async (channelId) => {
    try {
      const details = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`
      );
      console.log(details);

      const subCount = details?.data?.items[0]?.statistics?.subscriberCount;
      setSubscriberCount(subCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleVideo();
  }, []);

  // const open = useSelector((store) => store.app.open);

  return (
    <div className="ml-4 md:ml-16 md:top-10 md:mt-6"
      // className={`transition-all duration-300 mt-6 w-full h-full ${
      //   open ? "ml-64" : "ml-32"
      // }`}
    >
      {/* Responsive iframe wrapper */}
      <div className="w-full h-96 rounded-xl  md:h-96 lg:h-[500px] lg:w-[700] xl:w-[800px] xl:h-[600px] 2xl:w-[950px]">
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video info */}
      <div className="mt-2 px-2 my-4 w-full xl:w-[800px] 2xl:w-[950px]  sm:text-xs ">
        <h1 className="font-bold text-lg">{singleVideo?.snippet?.title}</h1>

        {/* Channel info and buttons */}
        <div className="flex justify-between items-center my-2">
          {/* Channel Info */}
          <div className="flex items-center">
            <Avatar
              src={singleVideo?.snippet?.thumbnails?.high?.url}
              size="30"
              round={true}
            />
            <div className="sm:mx-1 md:mx-2">
              <p className="text-sm font-semibold ml-1">
                {singleVideo?.snippet?.channelTitle}
              </p>
              <p className="text-xs text-gray-500 ml-1">
                {new Intl.NumberFormat("en", {
                  notation: "compact",
                }).format(subscriberCount)}{" "}
                subscribers
              </p>
            </div>
            <button className="bg-black text-white text-xs  md:font-medium rounded-full px-3 py-2 ml-2 md:px-4 md:py-2 md:ml-4">
              Subscribe
            </button>
          </div>

          {/* Icons - Like, Share, Download */}
          <div className="flex px-2 py-1 md:px-4 md:py-2">
            <div className="flex items-center border border-gray-300 rounded-full p-1 mr-1  md:p-2 md:mr-3 ">
              <AiOutlineLike 
              // size={20}
              size={window.innerWidth < 640 ? "16" : '20'} 
              className="m-1 hover:cursor-pointer" />
              <span className="mr-4 mx-1 border-r-2 border-gray-300 px-1">
                {new Intl.NumberFormat("en", {
                  notation: "compact",
                }).format(singleVideo?.statistics?.likeCount)}
              </span>
              <AiOutlineDislike
               size={window.innerWidth < 640 ? "16" : '20'} 
                className="m-1 hover:cursor-pointer"
              />
            </div>
            <button className="flex items-center border border-gray-300 rounded-full p-1  md:p-2 mr-3">
              <RiShareForwardLine size={window.innerWidth < 640 ? "16" : '20'}  />
              <span className="mx-2">Share</span>
            </button>
            <button className="flex items-center border border-gray-300 rounded-full p-1 md:p-2">
              <MdOutlineFileDownload  size={window.innerWidth < 640 ? "15" : '20'} />
              <span className="mx-2">Download</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video description */}
      <div className="font-semibold bg-gray-200 px-3 py-2 rounded-md w-full xl:w-[800px] 2xl:w-[950px]">
        <span>
          {new Intl.NumberFormat("en-US").format(
            singleVideo?.statistics?.viewCount
          )}{" "}
          views
        </span>
        <span className="ml-2">
          {new Date(singleVideo?.snippet?.publishedAt).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "short",
              day: "numeric",
            }
          )}
          ,
        </span>
        <div className="flex flex-col items-start ">
          <p className="font-normal">
            {showMore ? formatDescription(description) : firstLine}
          </p>

          <button
            className="font-semibold mt-4 cursor-pointer self-start"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show less" : "...more"}
          </button>
        </div>
      </div>

      {/* Comments section */}
      <div className="w-full xl:w-[900px]">
        <div className="flex items-center mt-5">
          <h1 className="font-bold text-xl mr-4">
            {singleVideo?.statistics?.commentCount} Comments
          </h1>
          <MdOutlineSort size={20} className="m-3" />
          <span> Sort by</span>
        </div>
        <div className="">
          <Avatar
            src={`https://avatarfiles.alphacoders.com/231/231277.jpg`}
            size="30"
            round={true}
          />
          <input
            className="border-b-2 border-black outline-none mx-2 my-1 px-2 w-full md:w-[65%] lg:w-[70%]"
            placeholder="Add a comment..."
          />
          <button className="rounded-full border-black bg-gray-300 border-1 px-3 py-2 m-2 hover:cursor-pointer">
            Cancel
          </button>
          <button className="rounded-full border-black border-1 bg-gray-300 px-3 py-2 hover:cursor-pointer">
            Comment
          </button>
        </div>
      </div>

      {/* Comments */}
      <Comments videoId={videoId} />
    </div>
  );
};

export default WatchVideoContainer;
