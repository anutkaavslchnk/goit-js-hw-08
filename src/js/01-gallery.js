// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



console.log(galleryItems);
const list = document.querySelector(".gallery");

const array = galleryItems.map((item, index) => {
  return `<li class="gallery__item" data-index="${index}"><a class="gallery__link" href="${item.original}"><img src="${item.preview}" alt="${item.description}" data-source="${item.original}"   class="gallery__image" /></a></li>`;
});

list.insertAdjacentHTML("beforeend", array.join(""));
var lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt",captionDelay:250, });
