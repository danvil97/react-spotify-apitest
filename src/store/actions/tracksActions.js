import axios from 'axios';

export const TRACKS_SEARCH_START = 'TRACKS_SEARCH_START';
export const tracksSearchStart = () => {
  return {
    type: TRACKS_SEARCH_START,
  };
};
export const TRACKS_SEARCH_SUCCESS = 'TRACKS_SEARCH_SUCCESS';
export const tracksSearchSuccess = (data) => {
  return {
    type: TRACKS_SEARCH_SUCCESS,
    payload: data,
  };
};
export const TRACKS_SEARCH_FAILURE = 'TRACKS_SEARCH_FAILURE';
export const tracksSearchFailure = (error) => {
  return {
    type: TRACKS_SEARCH_FAILURE,
    payload: error,
  };
};

export const tracksSearch = (queryParams, apiToken) => {
  return (dispatch) => {
    dispatch(tracksSearchStart());
    axios
      .get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: 'Bearer ' + apiToken,
          Accept: 'application/json',
        },
        params: { ...queryParams, type: 'track' },
      })
      .then((res) => {
        dispatch(tracksSearchSuccess(res.data.tracks.items));
      })
      .catch((error) => {
        dispatch(tracksSearchFailure(error));
      });
  };
};
