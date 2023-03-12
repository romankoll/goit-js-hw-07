import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallerySectionEll = document.querySelector(".gallery");

function createGallary(obj) {
  return obj.map(
    (ell) => `
      <a class="gallery__item" href="${ell.original}">
        <img
          class="gallery__image"
          src="${ell.preview}"
          alt="${ell.description}"
        />
      </a>`
  );
}

const addGalleryItemsList = createGallary(galleryItems).slice(",").join(" ");

gallerySectionEll.insertAdjacentHTML("beforeend", addGalleryItemsList);

/* options */

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
  overlayOpacity: 0.9,
  howCounter: true,
});

function handleImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
}

gallerySectionEll.addEventListener("click", handleImgClick);
