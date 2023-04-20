import React from 'react';
import SharePost from '../components/SharePost';

const Body = () => {
  return (
    <div
      className='app__body'
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <SharePost />
    </div>
  );
};

export default Body;
