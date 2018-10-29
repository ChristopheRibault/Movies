import { CHANGE_FORM, SUBMIT_FORM } from '../actions/types';

const initialState = {
  lastName: '',
  firstName: '',
  email: '',
  message: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {
        ...state,
        [action.input]: action.value,
      };
    case SUBMIT_FORM:
      return {
        ...state,
      };
    default:
      return state;
  }
}
