// src/components/ImageGallery/ImageGallery.jsx

import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={css.ImageGallery}>
      {/* Набір елементів списку із зображеннями */}
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            src={image.urls.small}
            alt={image.description}
            onClick={() => onClick(image)}
          />
        </li>
      ))}
    </ul>
  );
}
