import {
  ALBUMS_SEARCH_START,
  ALBUMS_SEARCH_FAILURE,
  ALBUMS_SEARCH_SUCCESS,
} from '../actions/albumsActions';

const initState = { isLoading: false, data: [], error: '' };

const albumsReducer = (state = initState, action) => {
  switch (action.type) {
    case ALBUMS_SEARCH_START:
      return { ...state, isLoading: true };
    case ALBUMS_SEARCH_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case ALBUMS_SEARCH_SUCCESS:
      return { isLoading: false, data: action.payload, error: '' };
    default:
      return state;
  }
};

export default albumsReducer;
