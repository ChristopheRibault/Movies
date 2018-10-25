import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import trailerReducer from './trailerReducer';

export default combineReducers({
  search: searchReducer,
  trailer: trailerReducer
});