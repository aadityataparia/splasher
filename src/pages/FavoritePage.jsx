import React from "react";
import Page from "../components/Page";
import Favorites from "../components/Favorites";

const FavoritePage = ({ setFavorite }) => (
  <Page>
    <Favorites setFavorite={setFavorite}></Favorites>
  </Page>
);

export default FavoritePage;
