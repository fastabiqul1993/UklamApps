const initialState = {
  user: {},
  token: {},
  userMobile: {},
  status: 0,
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        user: action.payload.data,
        userMobile: action.payload.data.responses,
        status: action.payload.data.status,
      };

    case 'REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        user: action.payload.data,
        token: action.payload.data.data.token,
        userMobile: action.payload.data.data.user,
      };

    default:
      return state;
  }
};

export default auth;
