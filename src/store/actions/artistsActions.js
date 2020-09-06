import axios from 'axios';

export const ARTISTS_SEARCH_START = 'ARTISTS_SEARCH_START';
export const artistsSearchStart = () => {
  return {
    type: ARTISTS_SEARCH_START,
  };
};
export const ARTISTS_SEARCH_SUCCESS = 'ARTISTS_SEARCH_SUCCESS';
export const artistsSearchSuccess = (data) => {
  return {
    type: ARTISTS_SEARCH_SUCCESS,
    payload: data,
  };
};
export const ARTISTS_SEARCH_FAILURE = 'ARTISTS_SEARCH_FAILURE';
export const artistsSearchFailure = (error) => {
  return {
    type: ARTISTS_SEARCH_FAILURE,
    payload: error,
  };
};

export const artistsSearch = (queryParams, apiToken) => {
  return (dispatch) => {
    dispatch(artistsSearchStart());
    axios
      .get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: 'Bearer ' + apiToken,
          Accept: 'application/json',
        },
        params: { ...queryParams, type: 'artist' },
      })
      .then((res) => {
        dispatch(artistsSearchSuccess(res.data.artists.items));
      })
      .catch((error) => {
        dispatch(artistsSearchFailure(error));
      });
  };
};
