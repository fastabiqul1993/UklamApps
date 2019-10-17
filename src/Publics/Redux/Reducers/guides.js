const initialState = {
  dataGuide: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const Guides = (state = initialState, action) => {
  switch (action.type) {
    case 'GUIDES_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GUIDES_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GUIDES_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        dataGuide: action.payload.data.response,
      };
    default:
      return state;
  }
};

export default Guides;
