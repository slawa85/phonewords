import * as types from './constants';

export default (state={
  words: [],
  converting: false,
  converted: false,
  error: null
}, action) => {

  switch(action.type) {
    case types.CONVERT_NUMBER_PENDING: {
      return {...state, converting: true};
    }
    case types.CONVERT_NUMBER_REJECTED: {
      return {...state, converting: false, error: action.payload};
    }
    case types.CONVERT_NUMBER_FULFILLED: {
      return {
        ...state,
        converting: false,
        converted: true,
        words: action.payload
      };
    }
  };

  return state;
}
