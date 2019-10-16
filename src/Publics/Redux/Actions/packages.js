import axios from 'axios';

export const getPackages = () => {
  return {
    type: 'PACKAGES',
    payload: axios.get(`http://54.235.224.136:5000/api/packages/`),
  };
};
