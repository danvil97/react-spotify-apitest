import tokenReducer from './tokenReducer';
import artistsReducer from './artistsReducer';
import albumsReducer from './albumsReducer';
import tracksReducer from './tracksReducer';
import playlistsReducer from './playlistsReducer';
import { reducer as reduxFormReducer } from 'redux-form';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tokenReducer,
  artistsReducer,
  albumsReducer,
  tracksReducer,
  playlistsReducer,
  form:reduxFormReducer
});

export default rootReducer;
