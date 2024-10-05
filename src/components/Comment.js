import React from 'react';
import Avatar from 'react-avatar';

const Comment = ({ avatarUrl, username, timestamp, text }) => {
  return (
    <div className='flex items-start mb-4'>
        <Avatar
        src={avatarUrl || undefined} 
        name={username}   
        size="35"
        round={true}
      />
      
      <div className='ml-3'>
        {/* Comment header */}
        <div className='text-sm'>
          <span className='font-semibold'>{username}</span>
          <span className='text-gray-500 ml-2 text-xs'>{timestamp}</span>
        </div>

        {/* Comment body */}
        <p className='text-sm mt-1 leading-relaxed break-words max-w-lg'>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Comment;
