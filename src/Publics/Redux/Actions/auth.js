import axios from 'axios';

export const Login = form => {
  return {
    type: 'LOGIN_USER',
    payload: axios.post(`http://54.235.224.136:5000/api/login/`, form),
  };
};
