import axios from 'axios';

export const SEARCH_START = 'SEARCH_START';
export const searchStart = () => {
  return {
    type: SEARCH_START,
  };
};
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const searchSuccess = (data) => {
  return {
    type: SEARCH_SUCCESS,
    payload: data,
  };
};
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const searchFailure = (error) => {
  return {
    type: SEARCH_FAILURE,
    payload: error,
  };
};

export const search = (queryParams, apiToken) => {
  return (dispatch) => {
    dispatch(searchStart());
    axios
      .get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: 'Bearer ' + apiToken,
          Accept: 'application/json',
        },
        params: { ...queryParams, type: 'artist' },
      })
      .then((res) => {
        dispatch(searchSuccess(res.data.artists.items));
      })
      .catch((error) => {
        dispatch(searchFailure(error));
      });
  };
};
