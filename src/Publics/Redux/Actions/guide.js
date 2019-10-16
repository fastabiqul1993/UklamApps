import axios from 'axios';

export const getGuides = () => {
  return {
    type: 'GUIDES',
    payload: axios.get(`http://54.235.224.136:5000/api/guide/`),
  };
};
