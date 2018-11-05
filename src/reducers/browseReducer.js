import { SELECT_GENRE, SUBMIT_CRITERIAS, SELECT_RELEASE_DATE, SELECT_AVERAGE_VOTE } from '../actions/types';

const initialState = {
  genre: '',
  averageVote: 0,
  releaseDateFrom: '',
  releaseDateTo: '',
  browseResults: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_GENRE:
      return {
        ...state,
        genre: action.genre,
      };
    case SELECT_AVERAGE_VOTE:
      return {
        ...state,
        averageVote: action.averageVote,
      };
    case SELECT_RELEASE_DATE:
      return {
        ...state,
        [action.date]: action.value,
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
