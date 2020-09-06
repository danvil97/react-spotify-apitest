import axios from 'axios';

export const PLAYLISTS_SEARCH_START = 'PLAYLISTS_SEARCH_START';
export const playlistsSearchStart = () => {
  return {
    type: PLAYLISTS_SEARCH_START,
  };
};
export const PLAYLISTS_SEARCH_SUCCESS = 'PLAYLISTS_SEARCH_SUCCESS';
export const playlistsSearchSuccess = (data) => {
  return {
    type: PLAYLISTS_SEARCH_SUCCESS,
    payload: data,
  };
};
export const PLAYLISTS_SEARCH_FAILURE = 'PLAYLISTS_SEARCH_FAILURE';
export const playlistsSearchFailure = (error) => {
  return {
    type: PLAYLISTS_SEARCH_FAILURE,
    payload: error,
  };
};

export const playlistsSearch = (queryParams, apiToken) => {
  return (dispatch) => {
    dispatch(playlistsSearchStart());
    axios
      .get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: 'Bearer ' + apiToken,
          Accept: 'application/json',
        },
        params: { ...queryParams, type: 'playlist' },
      })
      .then((res) => {
        dispatch(playlistsSearchSuccess(res.data.playlists.items));
      })
      .catch((error) => {
        dispatch(playlistsSearchFailure(error));
      });
  };
};
