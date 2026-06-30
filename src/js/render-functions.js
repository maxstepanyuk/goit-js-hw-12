import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
export const loadMoreButton = document.querySelector('.load-more');

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

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreButton.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreButton.classList.add('hidden');
}
