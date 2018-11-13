import axios from 'axios';
import { SEARCH_MOVIES, AUTOCOMP_SEARCH } from './types';

require('dotenv').config();

const API_KEY = process.env.API_KEY;

export const searchMovies = e => (dispatch) => {
  const query = e.target.elements.searchInput.value;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  axios
    .get(url)
    .then((res) => {
      if (query) {
        dispatch({
          type: SEARCH_MOVIES,
          results: res.data.results,
          showSearch: true,
        });
      } else {
        dispatch({
          type: SEARCH_MOVIES,
          results: undefined,
          showSearch: false,
        });
      }
    })
    .catch(error => console.log(error));
};

export const autoCompSearch = e => (dispatch) => {
  const input = e.target.value;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`;
  axios.get(url).then((res) => {
    const titles = [];
    if (res.data.results) {
      for (let i = 0; i < res.data.results.length; i += 1) {
        titles.push(res.data.results[i].title);
      }
    }
    dispatch({
      type: AUTOCOMP_SEARCH,
      titles,
    });
  });
};
