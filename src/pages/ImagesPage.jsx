import React from "react";
import Page from "../components/Page";
import ImagesList from "../components/ImagesList";

const ImagesPage = ({ setFavorite }) => (
  <Page>
    <ImagesList setFavorite={setFavorite}></ImagesList>
  </Page>
);

export default ImagesPage;
