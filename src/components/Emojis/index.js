import React from 'react';
import PropTypes from 'prop-types';
import EmojiPicker from 'emoji-picker-react';

const Emojis = ({ pickEmoji }) => {
  return (
    <div className='emoji__container' style={styles.container}>
      <EmojiPicker onEmojiClick={pickEmoji} />
    </div>
  );
};

const styles = {
  container: {
    width: 'fit-content',
  },
};

Emojis.propTypes = {
  pickEmoji: PropTypes.func,
};

export default Emojis;
