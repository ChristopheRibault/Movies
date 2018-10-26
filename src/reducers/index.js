import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import trailerReducer from './trailerReducer';
import homeReducer from './homeReducer';

export default combineReducers({
  search: searchReducer,
  trailer: trailerReducer,
  home: homeReducer
});