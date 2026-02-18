import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchImages = async (searchQuery, currentPage) => {
  //   const response = await axios.get(`/search?query=${searchQuery}`);
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      per_page: 12,
      page: currentPage,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });
  return response.data.results;
};
