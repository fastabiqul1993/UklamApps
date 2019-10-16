const initialState = {
  user: [],
  guide: [],
  token: '',
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        user: action.payload.data.response,
      };
    ////////////////////////////////////////////////////////////////////
    case 'PATCH_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'PATCH_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'PATCH_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };
    //////////////////////////////////////////////////////////////////////////
    case 'GET_AllGuide_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_AllGuide_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_AllGuide_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        guide: action.payload.data.response,
      };

    default:
      return state;
  }
};

export default user;
