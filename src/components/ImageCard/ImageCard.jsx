// src/components/ImageCard/ImageCard.jsx
import css from "./ImageCard.module.css";

export default function ImageCard({ src, alt, onClick }) {
  return (
    <div className={css.ImageCard}>
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  );
}
