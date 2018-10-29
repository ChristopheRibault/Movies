import { SHOW_TRAILER, CLOSE_TRAILER } from '../actions/types';

const initialState = {
  videoID: '',
  displayVideo: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_TRAILER:
      return {
        videoID: action.videoId,
        displayVideo: action.displayVideo,
      };
    case CLOSE_TRAILER:
      return {
        videoID: action.videoId,
        displayVideo: action.displayVideo,
      };
    default:
      return state;
  }
}
