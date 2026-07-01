import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';

const gallerySimpleLightboxOptions = {
  captionsData: 'alt',
  captionDelay: 250,
  className: 'lightbox-custom',
};

const lightbox = new SimpleLightbox(
  '.open-modal-link',
  gallerySimpleLightboxOptions
);

export function createGallery(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a
          class="gallery-link open-modal-link"
          href="${image.largeImageURL}"
        >
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="Photo of ${image.name} by ${image.user}"
            with="360"
            height="152"
          />
          <ul class="gallery-item-stats">
            <li class="gallery-item-stat">
              <p class="gallery-item-stat-name">Likes</p>
              <p class="gallery-item-stat-value">${image.likes}</p>
            </li>
            <li class="gallery-item-stat">
              <p class="gallery-item-stat-name">Views</p>
              <p class="gallery-item-stat-value">${image.views}</p>
            </li>
            <li class="gallery-item-stat">
              <p class="gallery-item-stat-name">Comments</p>
              <p class="gallery-item-stat-value">${image.comments}</p>
            </li>
            <li class="gallery-item-stat">
              <p class="gallery-item-stat-name">Downloads</p>
              <p class="gallery-item-stat-value">${image.downloads}</p>
            </li>
          </ul>
        </a>
      </li>`
    )
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  refs.loadMoreButton.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  refs.loadMoreButton.classList.add('hidden');
}

export function showCantLoadMore() {
  refs.cantLoadMore.classList.remove('hidden');
}

export function hideCantLoadMore() {
  refs.cantLoadMore.classList.add('hidden');
}
