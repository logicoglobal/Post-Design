import ACTIONS from '../actions';

const initialState = {
  modal: false,
  caption: '',
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TAGMODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case ACTIONS.GETCAPTION:
      return {
        ...state,
        caption: action.payload,
      };
    default:
      return state;
  }
};
export default postReducer;
