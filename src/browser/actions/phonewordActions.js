import axios from 'axios';

export function fetchPhonewords(number) {
  return (dispatch) => {
    dispatch({type: 'CONVERT_NUMBER'});
    axios.get(`/phonewords/${number}`)
      .then(response => {
        dispatch({type: 'CONVERT_NUMBER_FULFILLED', payload: response.data});
      })
      .catch(error => {
        dispatch({type: 'CONVERT_NUMBER_REJECTED', payload: error});
      });
  }
}
