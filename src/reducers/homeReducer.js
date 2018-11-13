import { FETCH_POPULAR, FETCH_UPCOMING, FETCH_LASTRELEASED } from '../actions/types';

const initialState = {
  popularMovies: [],
  upcomingMovies: [],
  lastReleasedMovies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POPULAR:
      return {
        ...state,
        popularMovies: action.movies,
      };
    case FETCH_UPCOMING:
      return {
        ...state,
        upcomingMovies: action.movies,
      };
    case FETCH_LASTRELEASED:
      return {
        ...state,
        lastReleasedMovies: action.movies,
      };
    default:
      return state;
  }
}
