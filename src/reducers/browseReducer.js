import { SELECT_GENRE, SUBMIT_CRITERIAS, SELECT_AVERAGE_VOTE } from '../actions/types';

const initialState = {
  genre: '',
  averageVote: 0,
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
    case SUBMIT_CRITERIAS:
      return {
        ...state,
        browseResults: action.browseResults,
      };
    default:
      return state;
  }
}
