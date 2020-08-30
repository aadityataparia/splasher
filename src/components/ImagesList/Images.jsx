import React from "react";
import Masonry from "react-masonry-component";
import Image from "./Image";

const masonryOptions = {
  transitionDuration: 100,
};

const Images = ({ setFavorite, images }) => (
  <Masonry options={masonryOptions}>
    {images.map((i) => (
      <Image key={i.id} data={i} setFavorite={setFavorite}></Image>
    ))}
  </Masonry>
);

export default Images;
