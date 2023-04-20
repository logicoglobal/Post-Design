import React from 'react';
import './style.css';

const Avatar = ({ avatar, username }) => {
  return (
    <div className='avatar'>
      <div className='avatar_wrapper'>
        <img
          src={
            avatar
              ? avatar
              : 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png'
          }
          alt={username ? username : ''}
        />
      </div>

      <h4>{username && username}</h4>
    </div>
  );
};

export default Avatar;
