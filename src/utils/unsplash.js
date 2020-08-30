import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_UNSPLASH_API_KEY,
});

export const getPhotos = (page = 0, size = 20) =>
  unsplash.photos.listPhotos(page, size, "latest").then((resp) => resp.json());

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
