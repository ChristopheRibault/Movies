import { SHOW_TRAILER, CLOSE_TRAILER } from "./types";
import axios from "axios";

const API_KEY = "17e0f34221767f1716a0e3a321214fb3";

export const showTrailer = id => dispatch => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  axios.get(url).then(res => {
    let videoId = res.data.results[0] ? res.data.results[0].key : undefined;
    for (let i = res.data.results.length - 1; i >= 0; i--) {
      if (res.data.results[i].name.toLowerCase().includes("trailer")) {
        videoId = res.data.results[i].key;
      }
		}
    dispatch({
      type: SHOW_TRAILER,
      videoId: videoId,
      displayVideo: true
    });
  });
};

export const closeTrailer = () => dispatch =>{
	dispatch({
		type: CLOSE_TRAILER,
		videoId: undefined,
		show: false
	})
}
