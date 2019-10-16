import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const getUser = email => {
  return {
    type: 'GET_USER',
    payload: axios.get(`http://54.235.224.136:5000/api/user/?email=${email}`),
  };
};

export const patchUser = (email, data) => {
  return {
    type: 'PATCH_USER',
    payload: axios.patch(
      `http://54.235.224.136:5000/api/user/profile/?email=${email}`,
      data,
    ),
  };
};

export const getAllGuide = () => {
  return {
    type: 'GET_AllGuide',
    payload: axios.get(`http://54.235.224.136:5000/api/guide/`),
  };
};
