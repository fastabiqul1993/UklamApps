const initialState = {
  dataUser: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'LOGIN_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'LOGIN_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        dataUser: action.payload.data.response,
      };
    case 'SIGNUP_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'SIGNUP_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'SIGNUP_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        dataUser: action.payload.data.response,
      };
    default:
      return state;
  }
};

export default Auth;
