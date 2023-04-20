import React from 'react';
import './style.css';

import { useSelector } from 'react-redux';

const TagModal = () => {
  const modal = useSelector((state) => state.post.modal);

  return (
    <div
      className='modal__wrapper'
      style={{ visibility: modal ? 'visible' : 'hidden' }}
    >
      <div className='tag__modal'>
        <div className='hshape'></div>
        <div className='tag__header'>
          <h4>Tag:</h4>
          <input type='text' className='tag__input' />
        </div>
        <div className='tag__body'></div>
      </div>
    </div>
  );
};

export default TagModal;
