import React, { useState, createRef, useRef, useEffect } from 'react';
import './style.css';
import Avatar from '../Avatar';
import Emoji from '../Emojis';
import { BsEmojiSmile } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {
  dispatchTagModal,
  dispatchCaption,
} from '../../redux/actions/postAction';

const PostContainer = () => {
  const [clickedOutside, setClickedOutside] = useState(false);

  const [clickedOutsideEmoji, setClickedOutsideEmoji] = useState(false);

  const [caption, setCaption] = useState('');
  const focusImg = useRef();
  const focusEmoji = useRef();
  const modal = useSelector((state) => state.post.modal);
  // const caption = useSelector((state) => state.post.caption);

  const dispatch = useDispatch();

  const showToggle = (e) => {
    setShowEmojis(false);
    setClickedOutside(false);
    dispatch(dispatchTagModal(!modal));

    let rect = e.target.getBoundingClientRect();

    let left = e.clientX - rect.left - 30 + 'px';
    let top = e.clientY - rect.top + 50 + 'px';

    // let left = e.clientX - 340 + 'px';
    // let top = e.clientY - 84 + 'px';

    let tagModal = document.querySelector('.modal__wrapper');
    tagModal.style.left = left;
    tagModal.style.top = top;
  };

  // Emoji
  const inputRef = createRef();
  const [showEmojis, setShowEmojis] = useState();
  const [cursorPosition, setCursorPosition] = useState();

  const pickEmoji = (e, { emoji }) => {
    const ref = inputRef.current;
    ref.focus();
    const start = caption.substring(0, ref.selectionStart);
    const end = caption.substring(ref.selectionStart);
    const text = start + emoji + end;

    setCaption(text);

    setCursorPosition(start.length + emoji.length);
  };

  const handleShowEmojis = () => {
    inputRef.current.focus();
    setClickedOutsideEmoji(false);
    setShowEmojis(!showEmojis);
    dispatch(dispatchTagModal(false));
  };

  const handleChange = (e) => {
    setCaption(e.target.value);
    dispatch(dispatchCaption(caption));
  };

  useEffect(() => {
    inputRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const handleClickOutside = (e) => {
    if (e.target.closest('.emoji__container')) {
      console.log(e.target);
    }
    if (modal === false && showEmojis === true) {
      // let emjiContainer = document.querySelector('.emoji__container');
      if (
        !focusEmoji.current.contains(e.target) &&
        !e.target.closest('.emoji__container')
      ) {
        setClickedOutsideEmoji(true);
        setShowEmojis(false);
      }
    }
    if (showEmojis === false && modal === true) {
      let tagModal = document.querySelector('.modal__wrapper');
      let tagHeader = document.querySelector('.tag__header');
      let appBody = document.querySelector('.app__body');
      if (
        !focusImg.current.contains(e.target) &&
        !e.target.parentNode.contains(tagModal) &&
        !e.target.parentNode.contains(tagHeader) &&
        !e.target.parentNode.contains(appBody)
      ) {
        setClickedOutside(true);
        dispatch(dispatchTagModal(false));
      }
    }
  };

  // const handleClickOutsideEmoji = (e) => {
  // 	// let tagModal = document.querySelector('.modal__wrapper');
  // 	// let tagHeader = document.querySelector('.tag__header');
  // 	// let appBody = document.querySelector('.app__body');
  // 	if (!focusEmoji.current.contains(e.target)) {
  // 		setClickedOutsideEmoji(true);
  // 		setShowEmojis(false);
  // 	}
  // };

  // const handleClickInside = () => setClickedOutside(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });
  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutsideEmoji);
  //   return () =>
  //     document.removeEventListener('mousedown', handleClickOutsideEmoji);
  // });

  return (
    <div className='post_inner_container'>
      <div className='right__section' onClick={showToggle} ref={focusImg}>
        <img
          src='https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg'
          alt='insta img'
        />
      </div>
      <div className='left__section'>
        <Avatar
          username='jhone_doe'
          avatar='https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg'
        />
        <textarea
          aria-label='Write a caption...'
          placeholder='Write a caption...'
          className='textInput'
          autoComplete='off'
          autoCorrect='off'
          onChange={handleChange}
          ref={inputRef}
          value={caption}
        />
        <div className='bottom_text'>
          <div onClick={handleShowEmojis} ref={focusEmoji}>
            <BsEmojiSmile />
          </div>
          <p>{caption.length}/2,220</p>
        </div>
        {showEmojis && <Emoji pickEmoji={pickEmoji} />}
      </div>
    </div>
  );
};

export default PostContainer;
