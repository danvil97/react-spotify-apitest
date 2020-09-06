import {
  PLAYLISTS_SEARCH_START,
  PLAYLISTS_SEARCH_FAILURE,
  PLAYLISTS_SEARCH_SUCCESS,
} from '../actions/playlistsActions';

const initState = { isLoading: false, data: [], error: '' };

const playlistsReducer = (state = initState, action) => {
  switch (action.type) {
    case PLAYLISTS_SEARCH_START:
      return { ...state, isLoading: true };
    case PLAYLISTS_SEARCH_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case PLAYLISTS_SEARCH_SUCCESS:
      return { isLoading: false, data: action.payload, error: '' };
    default:
      return state;
  }
};

export default playlistsReducer;
