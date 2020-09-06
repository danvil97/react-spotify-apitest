import {
  ARTISTS_SEARCH_START,
  ARTISTS_SEARCH_FAILURE,
  ARTISTS_SEARCH_SUCCESS,
} from '../actions/artistsActions';

const initState = { isLoading: false, data: [], error: '' };

const artistsReducer = (state = initState, action) => {
  switch (action.type) {
    case ARTISTS_SEARCH_START:
      return { ...state, isLoading: true };
    case ARTISTS_SEARCH_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case ARTISTS_SEARCH_SUCCESS:
      return { isLoading: false, data: action.payload, error: '' };
    default:
      return state;
  }
};

export default artistsReducer;
