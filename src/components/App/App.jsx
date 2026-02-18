// App.jsx

import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { fetchImages } from "../../images-api";

export default function App() {
  const [images, setImages] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    console.log("Search images:", newQuery);
  };

  const handleLoadMore = () => setPage(page + 1);

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

  return (
    <div className="App">
      <header>
        <SearchBar onSubmit={handleSearch} />
      </header>
      {images && <ImageGallery images={images} />}
      <Loader />
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <h1>Hello, World!</h1>
    </div>
  );
}
