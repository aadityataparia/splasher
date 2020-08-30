import React, { Suspense, lazy } from "react";
import Page from "../components/Page";
import BigLoading from "../components/BigLoading";

const ImagesList = lazy(() => import("../components/ImagesList"));

const ImagesPage = ({ setFavorite }) => (
  <Page>
    <Suspense fallback={<BigLoading></BigLoading>}>
      <ImagesList setFavorite={setFavorite}></ImagesList>
    </Suspense>
  </Page>
);

export default ImagesPage;
