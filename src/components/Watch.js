// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import Avatar from "react-avatar";
// import { AiFillLike, AiFillDislike } from "react-icons/ai";
// import { IoMdShareAlt, IoMdDownload } from "react-icons/io";
// import axios from "axios";
// import { API_KEY } from "../constants/youtube";

// const Watch = () => {
//   const [singleVideo, setSingleVideo] = useState("");
//   const [showMore, setShowMore] = useState(false);
//   const description = singleVideo?.snippet?.description || "";
//   const firstLine = description?.split("\n")[0] || ""; // Ensure it's safely handled

//   const formatDescription = (text) => {
//     const urlPattern = /(https?:\/\/[^\s]+)/g;
//     return text.split("\n").map((line, index) => (
//       <span key={index}>
//         {line.split(urlPattern).map((part, i) =>
//           urlPattern.test(part) ? (
//             <a
//               href={part}
//               key={i}
//               className="text-blue-600 hover:underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {part}
//             </a>
//           ) : (
//             part
//           )
//         )}
//         <br />
//       </span>
//     ));
//   };

//   const [searchParams] = useSearchParams();
//   const videoId = searchParams.get("v");

//   const getSingleVideo = async () => {
//     try {
//       const res = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
//       );
//       setSingleVideo(res?.data?.items[0]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getSingleVideo();
//   }, []);

//   console.log(singleVideo);

//   const open = useSelector((store) => store.app.open);


//   return (
//     <div className="mt-6">
//       {/* Container wrapping both video and description */}
//       <div
//         className={`w-full max-w-[860px] mx-auto transition-all duration-300 ${
//           open ? "ml-64" : "ml-32"
//         }`}
//       >
//         {/* Video iframe */}
//         <iframe
//           className="rounded-lg w-full"
//           height="490"
//           src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//         ></iframe>

//         {/* Video info */}
//         <div className="mt-2 px-2 my-4">
//           <h1 className="font-bold text-lg">{singleVideo?.snippet?.title}</h1>

//           {/* Channel info and buttons */}
//           <div className="flex justify-between items-center my-2">
//             {/* Channel Info */}
//             <div className="flex items-center">
//               <Avatar
//                 src={singleVideo?.snippet?.thumbnails?.high?.url}
//                 size="30"
//                 round={true}
//               />
//               <div className="mx-2">
//                 <p className="text-sm font-semibold">
//                   {singleVideo?.snippet?.channelTitle}
//                 </p>
//                 <p className="text-xs text-gray-500">2.09M subscribers</p>
//               </div>
//               <button className="bg-black text-white font-medium rounded-full px-4 py-2 ml-4">
//                 Subscribe
//               </button>
//             </div>

//             {/* Icons - Like, Share, Download */}
//             <div className="flex">
//               <div className="flex items-center border border-gray-300 rounded-full p-2 mr-3">
//                 <AiFillLike size={20} className="m-1 hover:cursor-pointer" />
//                 <span className="mr-4 mx-1 border-r-2 border-gray-300 px-1">
//                   {new Intl.NumberFormat("en", {
//                     notation: "compact",
//                   }).format(singleVideo?.statistics?.likeCount)}
//                 </span>
//                 <AiFillDislike size={20} className="m-1 hover:cursor-pointer" />
//               </div>
//               <button className="flex items-center border border-gray-300 rounded-full p-2 mr-3">
//                 <IoMdShareAlt size={20} />
//                 <span className="mx-2">Share</span>
//               </button>
//               <button className="flex items-center border border-gray-300 rounded-full p-2">
//                 <IoMdDownload />
//                 <span className="mx-2">Download</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Video description */}
//         <div className="font-semibold bg-gray-200 px-4 py-2 mt-4 rounded-md w-full">
//           <span>
//             {new Intl.NumberFormat("en-US").format(
//               singleVideo?.statistics?.viewCount
//             )}{" "}
//             views
//           </span>
//           <span className="ml-2">
//             {new Date(singleVideo?.snippet?.publishedAt).toLocaleDateString(
//               "en-US",
//               {
//                 year: "numeric",
//                 month: "short",
//                 day: "numeric",
//               }
//             )}
//             ,
//           </span>
//           <div className="flex flex-col items-start">
//             <p className="font-normal">
//               {showMore ? formatDescription(description) : firstLine}
//             </p>

//             <button
//               className="font-semibold mt-4 cursor-pointer self-start"
//               onClick={() => setShowMore(!showMore)}
//             >
//               {showMore ? "Show less" : "...more"}
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Comments */}
      
//     </div>
//   );
// };

// export default Watch;

import React from 'react'
import WatchVideoContainer from './WatchVideoContainer'
// import Comments from './Comments'
import RightSideBar from './RightSideBar'


const Watch = () => {
  return (
    <div>
      <WatchVideoContainer/>
      <RightSideBar/>

      {/* <Comments/> */}
      
    </div>
  )
}

export default Watch
