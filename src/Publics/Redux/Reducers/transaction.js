const initialState = {
  transactions: [],
  order: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TRANSACTION_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_TRANSACTION_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_TRANSACTION_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        transactions: action.payload.data.response,
      };

    case 'POST_ORDER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'POST_ORDER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'POST_ORDER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        order: action.payload.data.response,
      };

    default:
      return state;
  }
};

export default transaction;
