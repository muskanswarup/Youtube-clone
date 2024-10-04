// import axios from 'axios';
import React, {useEffect} from 'react'
import { useSelector } from "react-redux";
// import { API_KEY } from "../constants/youtube";


const Comments = ({videoId}) => {

  const open = useSelector((store) => store.app.open);

  // const getComments = async () => {
  //   try{
  //     const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}=${API_KEY} `)
  //     console.log(res);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getComments();
  // }, []);
  return (
    <div className={`w-full max-w-[860px] mx-auto transition-all duration-300 ${
      open ? "ml-64" : "ml-32"
    }`}>
      {/* COMMENTSSS */}
      <h2>Comments for Video ID: {videoId}</h2>
      

    </div>
  )
}

export default Comments
