// src/components/ImageModal/ImageModal.jsx

import css from "./ImageModal.module.css";

export default function ImageModal({
  src,
  alt,
  description,
  author,
  created_at,
  likes,
}) {
  return (
    <div className={css.ImageModal}>
      <img src={src} alt={alt} />
      <div className={css.ImageInfo}>
        <p className={css.Description}>{description}</p>
        <p className={css.Author}>Author: {author}</p>
        <p className={css.CreatedAt}>Created at: {created_at}</p>
        <p className={css.Likes}>Likes: {likes}</p>
      </div>
    </div>
  );
}
