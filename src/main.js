import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
  showCantLoadMore,
  hideCantLoadMore,
} from './js/render-functions';

export const refs = {
  form: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery'),
  cantLoadMore: document.querySelector('.cant-load-more'),
  loadMoreButton: document.querySelector('.load-more'),
};

export const ITEMS_PER_PAGE = 15;

let currentPage = 1;
let searchText = null;

refs.form.addEventListener('submit', onSerchSubmit);
refs.loadMoreButton.addEventListener('click', handleLoadMoreButton);

async function onSerchSubmit(event) {
  event.preventDefault();
  const eForm = event.target;
  searchText = eForm.elements['search-text'].value.trim();
  if (searchText.length <= 0) {
    showToast('empty search', 'error');
    return;
  }

  clearGallery();
  currentPage = 1;
  await createNewPage();
}

async function handleLoadMoreButton(event) {
  const galleryOldPageEnd = document
    .querySelector('.gallery')
    .getBoundingClientRect().bottom;

  currentPage++;
  await createNewPage();

  window.scrollBy({
    top: galleryOldPageEnd,
    behavior: 'smooth',
  });
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

async function createNewPage() {
  hideLoadMoreButton();
  hideCantLoadMore();
  showLoader();

  try {
    const { hits: images, totalHits: totalImages } = await getImagesByQuery(
      searchText,
      currentPage
    );

    if (images.length <= 0) {
      showToast(
        'Sorry, there are no images matching your search query. Please try again!',
        'warning'
      );
    } else {
      createGallery(images);
    }

    const totalPages = Math.ceil(totalImages / ITEMS_PER_PAGE);

    if (currentPage < totalPages) {
      showLoadMoreButton();
      hideCantLoadMore();
    } else {
      hideLoadMoreButton();
      showCantLoadMore();
    }
  } catch (e) {
    console.log('Error on createNewPage', e);
    showToast(
      'Sorry, there was an error getting images. Please try again!',
      'error'
    );
    hideLoadMoreButton();
  } finally {
    hideLoader();
  }
}
