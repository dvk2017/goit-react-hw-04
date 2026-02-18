import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <ul className={css.ImageGallery}>
      {/* Набір елементів списку із зображеннями */}
      {images.map((image) => (
        <li key={image.id}>
          <p>{image.description}</p>
          {/*          <ImageCard src={image.urls.small} alt={image.description} /> */}
        </li>
      ))}
    </ul>
  );
}
