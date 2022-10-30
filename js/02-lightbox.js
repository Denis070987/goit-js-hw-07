import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector('.gallery');

function creatGallery(galleryItems) {
    return galleryItems
        .map((item) => 
           `<div class="gallery__item">
  <a class="gallery__item" 
  href="${item.original}">
  <img class="gallery__image" 
  src="${item.preview}" 
  alt="${item.description}" />
</a>
</div>`).join('');
    
}

const addGallery = creatGallery(galleryItems);
divGallery.innerHTML = addGallery;
divGallery.addEventListener('click', onImgClick);
function onImgClick(event) {
    
    if (event.target.nodeName !== 'IMG') {
      return
    }
    new SimpleLightbox('.gallery__item a', {captionsData: "alt",
  captionDelay: 250,});
} 

console.log(galleryItems);


