import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallerySectionEll = document.querySelectorAll(".gallery");
gallerySectionEll.addEventListener("click", handleImgClick);

function createGallary(obj) {
  return obj.map(
    (ell) => `
    <div class="gallery__item">
      <a class="gallery__link" href="${ell.original}">
        <img
          class="gallery__image"
          src="${ell.preview}"
          data-source="${ell.original}"
          alt="${ell.description}"
        />
      </a>
    </div>`
  );
}

const addGalleryItemsList = createGallary(galleryItems).slice(",").join(" ");

gallerySectionEll.insertAdjacentHTML("beforeend", addGalleryItemsList);

function handleImgClick(event) {
  event.preventDefault();
  const instance = basicLightbox
    .create(`<img src="${event.target.dataset.source}" width="1280">`)
    .show();

  if (event.target.nodeName === "IMG") {
    return instance;
  } else {
    return;
  }
}
