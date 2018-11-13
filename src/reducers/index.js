import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import trailerReducer from './trailerReducer';
import homeReducer from './homeReducer';
import formReducer from './formReducer';
import browseReducer from './browseReducer';

export default combineReducers({
  search: searchReducer,
  trailer: trailerReducer,
  home: homeReducer,
  form: formReducer,
  browse: browseReducer,
});
