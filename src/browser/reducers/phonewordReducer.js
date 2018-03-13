export default (state={
  phonewoords: [],
  converting: false,
  converted: false,
  error: null
}, action) => {

  switch(action.type) {
    case 'CONVERT_NUMBER': {
      return {...state, converting: true};
    }
    case 'CONVERT_NUMBER_REJECTED': {
      return {...state, converting: false, error: action.payload};
    }
    case 'CONVERT_NUMBER_FULFILLED': {
      return {
        ...state,
        converting: false,
        converted: true,
        phonewoords: action.payload
      };
    }
  };

  return state;
}
