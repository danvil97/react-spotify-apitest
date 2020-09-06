import {
  TRACKS_SEARCH_START,
  TRACKS_SEARCH_FAILURE,
  TRACKS_SEARCH_SUCCESS,
} from '../actions/tracksActions';

const initState = { isLoading: false, data: [], error: '' };

const tracksReducer = (state = initState, action) => {
  switch (action.type) {
    case TRACKS_SEARCH_START:
      return { ...state, isLoading: true };
    case TRACKS_SEARCH_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case TRACKS_SEARCH_SUCCESS:
      return { isLoading: false, data: action.payload, error: '' };
    default:
      return state;
  }
};

export default tracksReducer;
