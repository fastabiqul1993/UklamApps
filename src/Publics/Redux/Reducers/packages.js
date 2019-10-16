const initialState = {
  dataPackages: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const Packages = (state = initialState, action) => {
  switch (action.type) {
    case 'PACKAGES_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'PACKAGES_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'PACKAGES_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        dataPackages: action.payload.data.response,
      };
    default:
      return state;
  }
};

export default Packages;
