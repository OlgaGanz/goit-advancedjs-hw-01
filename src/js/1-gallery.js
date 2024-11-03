import '../css/styles.css';
import { images } from './data/imagesArray.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const createGalleryItem = item => {
  const liEl = document.createElement('li');
  liEl.classList.add('gallery-item');

  const linkEl = document.createElement('a');
  linkEl.classList.add('gallery-link');
  linkEl.href = item.original;

  const imageEl = document.createElement('img');
  imageEl.classList.add('gallery-image');
  imageEl.src = item.preview;
  imageEl.setAttribute('data-source', item.original);
  imageEl.alt = item.description;

  linkEl.append(imageEl);
  liEl.append(linkEl);

  return liEl;
};

const galleryItems = images.map(createGalleryItem);
const galleryEl = document.querySelector('.gallery');

galleryEl.append(...galleryItems);

let galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
