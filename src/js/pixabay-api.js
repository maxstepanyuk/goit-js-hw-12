import axios from 'axios';

const API_BASE_URL = 'https://pixabay.com/api/';
const API_KEY = import.meta.env.VITE_API_KEY 

export async function getImagesByQuery(query) {
  const params = {
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    key: API_KEY,
  };

  const { data } = await axios.get(API_BASE_URL, { params });
  return data;
}
