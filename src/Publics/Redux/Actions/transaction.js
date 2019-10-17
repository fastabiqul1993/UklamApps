import axios from 'axios';

export const getTransactionHistory = email => {
  return {
    type: 'GET_TRANSACTION',
    payload: axios.get(
      `http://54.235.224.136:5000/api/user/history/?email=${email}`,
    ),
  };
};
export const postOrder = (data, email) => {
  return {
    type: 'POST_ORDER',
    payload: axios.post(
      `http://54.235.224.136:5000/api/user/order/?email=${email}`,
      data,
    ),
  };
};
