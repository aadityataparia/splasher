import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_UNSPLASH_API_KEY,
});

export const getPhotos = (page = 1, size = 10) =>
  unsplash.photos.listPhotos(page, size, "latest").then((resp) => resp.json());

export const searchPhotos = (query, page = 1, size = 10) =>
  unsplash.search
    .photos(query, page, size)
    .then((resp) => resp.json())
    .then((r) => r.results);

export const downloadImage = async (image) => {
  const link = document.createElement("a");
  link.href = image.urls.full;
  link.download = "Image.jpg";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return true;
};

export default unsplash;
