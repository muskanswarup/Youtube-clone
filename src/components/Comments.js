import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";
import Comment from './Comment';
import { API_KEY } from '../constants/youtube';
import axios from 'axios';

const Comments = ({ videoId }) => {
  // const open = useSelector((store) => store.app.open);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  const getComments = async() => {
    try{
      
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`);
      console.log(res);

      const fetchedComments = res.data.items.map((item) => ({
        avatarUrl: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
        username: item.snippet.topLevelComment.snippet.authorDisplayName,
        timestamp: new Date(item.snippet.topLevelComment.snippet.publishedAt).toLocaleDateString(),
        text: item.snippet.topLevelComment.snippet.textDisplay,
        likes: item.snippet.topLevelComment.snippet.likeCount,
        replies: item.snippet.totalReplyCount
        
      })) 
      setComments(fetchedComments);
      console.log(fetchedComments);

    }catch(error){
      setError('Failed to fetch comments.');
      console.log(error);
    }
  }

  useEffect(() => {
    if(videoId){
      getComments();
    }
  }, [videoId]);

 

  return (
    <div>
      {/* Comments header */}
      {/* <h2 className='font-bold text-lg mb-4'>Comments for Video ID: {videoId}</h2> */}
      
      {
        error && <p className='text-red-500'>{error}</p>
      }
      {
        comments.length > 0 ? (
          comments.map((comment, index) => (
            <Comment 
              key={index}
              avatarUrl={comment.avatarUrl}
              username={comment.username}
              timestamp={comment.timestamp}
              text={comment.text}
              likes={comment.likes}
              replies={comment.replies}
            />
          ))
        ) : (
          <p> No comments available.</p>
        )
      }

    </div>
  );
};

export default Comments;
