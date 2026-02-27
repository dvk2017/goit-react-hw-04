// src/components/App/App.jsx

import { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { fetchImages } from "../../images-api";
import css from "./App.module.css";
import ImageModal from "../ImageModal/ImageModal";

Modal.setAppElement("#root");

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState({ src: "", alt: "" });

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);

  useEffect(() => {
    if (!query) return;
    async function getImages() {
      setIsLoading(true);
      try {
        setError(false);
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [query, page]);

  function openModal(image) {
    setShowModal(true);
    setModalImage({
      src: image.urls.regular,
      alt: image.alt_description,
      description: image.description,
      author: image.user.name,
      created_at: image.created_at,
      likes: image.likes,
    });
  }

  function closeModal() {
    setShowModal(false);
  }

  const LoadMoreBtnRef = useRef();

  useEffect(() => {
    if (page === 1) return;

    const btn = LoadMoreBtnRef.current;
    if (!btn) return;

    const y = btn.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, [images, error]);

  return (
    <div className="App">
      <header>
        <SearchBar onSubmit={handleSearch} />
      </header>
      {images && <ImageGallery images={images} onClick={openModal} />}
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn ref={LoadMoreBtnRef} onClick={handleLoadMore} />
      )}

      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className={css.Modal}
        overlayClassName={css.Overlay}
        contentLabel="Example Modal"
      >
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          description={modalImage.description}
          author={modalImage.author}
          created_at={modalImage.created_at}
          likes={modalImage.likes}
        />
      </Modal>
    </div>
  );
}
