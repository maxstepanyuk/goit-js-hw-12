import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', onSerchSubmit);

async function onSerchSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const searchText = form.elements['search-text'].value.trim();
  if (searchText.length <= 0) {
    showToast('empty search', 'error');
    return;
  }

  clearGallery();
  showLoader();

  try {
    const { hits: images } = await getImagesByQuery(searchText);
    if (images.length <= 0) {
      showToast(
        'Sorry, there are no images matching your search query. Please try again!',
        'warning'
      );
    } else {
      createGallery(images);
    }
  } catch (e) {
    console.log('Error on getImagesByQuery', e);
    showToast(
      'Sorry, there was an error getting images. Please try again!',
      'error'
    );
  } finally {
    hideLoader();
  }
}

export function showToast(message, type = 'success') {
  const options = {
    message,
    position: 'topRight',
    timeoot: 5000,
  };
  switch (type) {
    case 'success':
      iziToast.success(options);
      break;
    case 'error':
      iziToast.error(options);
      break;
    case 'warning':
      iziToast.warning(options);
      break;
    case 'info':
      iziToast.info(options);
      break;

    default:
      iziToast.error({ ...options, message: 'invalid type of tosat' });
      break;
  }
}
