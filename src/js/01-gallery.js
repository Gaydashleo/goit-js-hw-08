// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryEl = document.querySelector(".gallery");


function createGalleryImage(items) {
  return items.map(item =>  `<div class="gallery__item">
      <a class="gallery__link" href='${item.original}'>
      <img
        class="gallery__image"
        src='${item.preview}'
        data-source='${item.original}'
        alt='${item.description}'
      />
    </a>
  </div>`)
  .join(' ');
    
};
const addGalleryImage = createGalleryImage(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", addGalleryImage);
// Change code below this line

console.log(galleryItems);
