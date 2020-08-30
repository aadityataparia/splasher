import React, { Suspense, lazy } from "react";
import Page from "../components/Page";
import BigLoading from "../components/BigLoading";

const Favorites = lazy(() => import("../components/Favorites"));

const FavoritePage = ({ setFavorite }) => (
  <Page>
    <Suspense fallback={<BigLoading></BigLoading>}>
      <Favorites setFavorite={setFavorite}></Favorites>
    </Suspense>
  </Page>
);

export default FavoritePage;
