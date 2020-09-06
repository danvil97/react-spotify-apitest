import {
  SEARCH_START,
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
} from '../actions/playlistsActions';

const initState = { isLoading: false, data: [], error: '' };

const playlistsReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return { ...state, isLoading: true };
    case SEARCH_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case SEARCH_SUCCESS:
      return { isLoading: false, data: action.payload, error: '' };
    default:
      return state;
  }
};

export default playlistsReducer;
