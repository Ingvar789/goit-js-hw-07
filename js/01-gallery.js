import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');   
const cardsMarkup = createGalleryCardMarkup(galleryItems);    
    
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);   
    
function createGalleryCardMarkup(pictures) {
  return pictures.map(({ preview, original, description }) => {
    return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
  }).join('');
  }  

function onGalleryContainerClick(e) {

e.preventDefault()
    
const isImg = e.target.classList.contains('gallery__image');
    if (!isImg) {
    return
    }

const originalLink = e.target.dataset.source;
    
showBigPicture(originalLink);

}

function showBigPicture(link) {
const instance = basicLightbox.create(`
    <img src="${link}">
`)
instance.show()
}

