import ACTIONS from './index';

export const dispatchTagModal = (value) => {
  return {
    type: ACTIONS.TAGMODAL,
    payload: value,
  };
};

export const dispatchCaption = (text) => {
  return {
    type: ACTIONS.GETCAPTION,
    payload: text,
  };
};
