import { CHANGE_FORM } from './types';

const handleFormChange = e => (dispatch) => {
  dispatch({
    type: CHANGE_FORM,
    input: e.target.name,
    value: e.target.value,
  });
};

export default handleFormChange;
