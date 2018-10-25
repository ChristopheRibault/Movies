import { SEARCH_MOVIES, AUTOCOMP_SEARCH } from "../actions/types";

const initialState = {
  results: [],
  showSearch: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
				results: action.results,
				showSearch: action.showSearch
			};
		case AUTOCOMP_SEARCH:
			return {
				...state,
				titles: action.titles
			}
    default:
      return state;
  }
}
