import axios from 'axios';
import { SELECT_GENRE, SELECT_AVERAGE_VOTE, SELECT_RELEASE_DATE, SUBMIT_CRITERIAS } from './types';

require('dotenv').config();

const API_KEY = process.env.API_KEY;

export const selectGenre = e => (dispatch) => {
  const selectItem = e.target;
  const genre = [];
  for (let i = 0; i < selectItem.options.length; i += 1) {
    const opt = selectItem.options[i];
    if (opt.selected) genre.push(opt.value);
  }
  dispatch({
    type: SELECT_GENRE,
    genre: genre.join(','),
  });
};

export const selectAverageVote = e => (dispatch) => {
  dispatch({
    type: SELECT_AVERAGE_VOTE,
    averageVote: e.target.value,
  });
};

export const selectReleaseDate = e => (dispatch) => {
  dispatch({
    type: SELECT_RELEASE_DATE,
    date: e.target.id,
    value: e.target.value,
  });
};

export const submitCriterias = criterias => (dispatch) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=${criterias.averageVote}&with_genres=${criterias.genre}&primary_release_date.gte=${criterias.releaseDateFrom}&primary_release_date.lte=${criterias.releaseDateTo}`;
  axios.get(url)
    .then(res => dispatch({
      type: SUBMIT_CRITERIAS,
      browseResults: res.data.results,
    }));
};
