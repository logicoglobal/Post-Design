import React from 'react';
import './style.css';

import Header from '../Header';
import PostContainer from '../PostContainer';
import TagModal from '../TagModal';

const SharePost = () => {
  return (
    <div className='post__wrapper'>
      <div className='post__container'>
        <Header />
        <PostContainer />
        <TagModal />
      </div>
    </div>
  );
};

export default SharePost;
