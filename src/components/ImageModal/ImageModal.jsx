// src/components/ImageModal/ImageModal.jsx

import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({
  modalIsOpen,
  closeModal,
  src,
  alt,
  description,
  author,
  created_at,
  likes,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.Modal}
      overlayClassName={css.Overlay}
      contentLabel="Image Modal"
    >
      <div className={css.ImageModal}>
        <img src={src} alt={alt} />
        <div className={css.ImageInfo}>
          <p className={css.Description}>{description}</p>
          <p className={css.Author}>Author: {author}</p>
          <p className={css.CreatedAt}>Created at: {created_at}</p>
          <p className={css.Likes}>Likes: {likes}</p>
        </div>
      </div>
    </Modal>
  );
}
