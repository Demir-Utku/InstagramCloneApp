import {
  FEED_START,
  FEED_SUCCESS,
  FEED_FAILD

} from '../actions/types';

const INITIAL_STATE = {
  loadingCharacter: false,
  loadingAddItem: false,
  loadingRemoveItem: false,
  characters: []
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

      case FEED_START:
          return {
              ...state,
              loadingCharacter: true,
          };


      case FEED_SUCCESS:
          return {
              ...state,
              loadingCharacter: false,
              characters: action.payload.characters
          };

      case FEED_FAILD:
          return {
              ...state,
              loadingCharacter: false,
          };

      default:
          return state;
  }
};