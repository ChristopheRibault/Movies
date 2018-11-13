import axios from 'axios';

require('dotenv').config();

const API_KEY = process.env.API_KEY;

const findPop = (type, begins, ends) => (dispatch) => {
  let beginsDate;
  let beginsFormat;
  let endsDate;
  let endsFormat;

  if (begins) {
    beginsDate = new Date();
    beginsDate.setDate(beginsDate.getDate() + begins);
    beginsFormat = `${beginsDate.getFullYear()}-${beginsDate.getMonth() + 1}-${beginsDate.getDate()}`;
  } else {
    beginsFormat = '';
  }
  if (ends) {
    endsDate = new Date();
    endsDate.setDate(endsDate.getDate() + ends);
    endsFormat = `${endsDate.getFullYear()}-${endsDate.getMonth() + 1}-${endsDate.getDate()}`;
  } else {
    endsFormat = '';
  }

  const beginsURL = begins ? `&primary_release_date.gte=${beginsFormat}` : '';
  const endsURL = ends ? `&primary_release_date.lte=${endsFormat}` : '';
  const url = `https://api.themoviedb.org/3/discover/movie?&api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1${beginsURL}${endsURL}`;
  axios.get(url)
    .then((res) => {
      dispatch({
        type,
        movies: res.data.results,
      });
    });
};

export default findPop;
