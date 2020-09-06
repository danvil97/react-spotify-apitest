import axios from 'axios';

export const ALBUMS_SEARCH_START = 'ALBUMS_SEARCH_START';
export const albumsSearchStart = () => {
  return {
    type: ALBUMS_SEARCH_START,
  };
};
export const ALBUMS_SEARCH_SUCCESS = 'ALBUMS_SEARCH_SUCCESS';
export const albumsSearchSuccess = (data) => {
  return {
    type: ALBUMS_SEARCH_SUCCESS,
    payload: data,
  };
};
export const ALBUMS_SEARCH_FAILURE = 'ALBUMS_SEARCH_FAILURE';
export const albumsSearchFailure = (error) => {
  return {
    type: ALBUMS_SEARCH_FAILURE,
    payload: error,
  };
};

export const albumsSearch = (queryParams, apiToken) => {
  return (dispatch) => {
    dispatch(albumsSearchStart());
    axios
      .get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: 'Bearer ' + apiToken,
          Accept: 'application/json',
        },
        params: { ...queryParams, type: 'album' },
      })
      .then((res) => {
        dispatch(albumsSearchSuccess(res.data.albums.items));
      })
      .catch((error) => {
        dispatch(albumsSearchFailure(error));
      });
  };
};
