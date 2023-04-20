import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useSelector } from 'react-redux';
import './style.css';
const Header = () => {
  const caption = useSelector((state) => state.post.caption);
  return (
    <div className='post__header'>
      <MdKeyboardBackspace className='back__icon' />
      <h3>Create new post</h3>
      <button
        type='button'
        className='share__btn'
        onClick={() => console.log(caption)}
      >
        Share
      </button>
    </div>
  );
};

export default Header;
