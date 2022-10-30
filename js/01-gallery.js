import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector('.gallery');

function creatGallery(galleryItems) {
    return galleryItems
        .map((item) => 
           
            `<div class="gallery__item">
  <a class="gallery__link" href='${item.original}'>
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
  </a>
</div>`).join('');
    
}

const addGallery = creatGallery(galleryItems);
divGallery.innerHTML = addGallery;
divGallery.addEventListener('click', onImgClick);
function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return
    }
    const instance = basicLightbox.create(`
	<img src="${event.target.dataset.source}">
`)
    instance.show();
    
    divGallery.addEventListener("keydown", (event) => {
        if (event.code === 'Escape') {
            instance.close()
             document.removeEventListener("keydown", divGallery);
        }
    } )
    
} 
console.log(galleryItems);