import axios from 'axios';

const API_BASE_URL = 'https://pixabay.com/api/';
const API_KEY = import.meta.env.VITE_API_KEY 

export function getImagesByQuery(query) {
  const params = {
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    key: API_KEY,
  };

  return axios.get(API_BASE_URL, { params }).then(({ data }) => {
    return data;
  });
}
