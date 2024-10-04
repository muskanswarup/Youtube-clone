import React from 'react';
import { useSelector } from "react-redux";
import Comment from './Comment';

const Comments = ({ videoId }) => {
  const open = useSelector((store) => store.app.open);

  // Sample comments data
  const comments = [
    {
      avatarUrl: 'https://pbs.twimg.com/profile_images/990093841632903168/JpEYo8qH_400x400.jpg',
      username: '@muskelon',
      timestamp: '1 year ago',
      text: 'Tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette and select to insert.',
    },
    // Add more comment objects as needed...
  ];

  return (
    <div>
      {/* Comments header */}
      <h2 className='font-bold text-lg mb-4'>Comments for Video ID: {videoId}</h2>
      
      {/* Map through comments */}
      {comments.map((comment, index) => (
        <Comment
          key={index}
          avatarUrl={comment.avatarUrl}
          username={comment.username}
          timestamp={comment.timestamp}
          text={comment.text}
        />
      ))}
    </div>
  );
};

export default Comments;
