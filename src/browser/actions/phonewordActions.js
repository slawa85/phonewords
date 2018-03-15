import axios from 'axios';
import * as types from '../reducers/constants';

export function fetchPhonewords(number) {
  const request = axios.get(`/phonewords/${number}`);
  return (dispatch) => {
    dispatch({type: types.CONVERT_NUMBER_PENDING});
    request.then(response => {
      dispatch({type: types.CONVERT_NUMBER_FULFILLED, payload: response.data});
    })
    .catch((error) => {
      dispatch({type: types.CONVERT_NUMBER_REJECTED, payload: error.response.data.message});
    });
  }
}
