import { SELECT_GENRE, SUBMIT_CRITERIAS } from '../actions/types';

const initialState = {
  genre: '',
  browseResults: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_GENRE:
      return {
        ...state,
        genre: action.genre,
      };
    case SUBMIT_CRITERIAS:
      return {
        ...state,
        browseResults: action.browseResults,
      };
    default:
      return state;
  }
}
