import React from "react";
import Page from "../components/Page";
import ImagesList from "../components/ImagesList";
import { BackTop } from "antd";

const ImagesPage = ({ setFavorite }) => (
  <Page>
    <ImagesList setFavorite={setFavorite}></ImagesList>
    <BackTop />
  </Page>
);

export default ImagesPage;
