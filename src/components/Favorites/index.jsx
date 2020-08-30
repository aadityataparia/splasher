import React from "react";
import { PageHeader } from "antd";
import { PaddedContainer } from "../GenericStyles";
import { useFavorites } from "../../hooks/favorites";
import DeleteListButton from "./DeleteListButton";
import Images from "../ImagesList/Images";

const Favorites = ({ setFavorite }) => {
  const favorites = useFavorites();
  return (
    <PaddedContainer>
      <h1>Favorites</h1>
      {Object.keys(favorites).map((list) => (
        <React.Fragment>
          <PageHeader
            title={list}
            subTitle={favorites[list].description || ""}
            extra={
              <DeleteListButton
                setFavorite={setFavorite}
                list={list}
              ></DeleteListButton>
            }
          ></PageHeader>
          <Images
            setFavorite={setFavorite}
            images={favorites[list].images}
          ></Images>
        </React.Fragment>
      ))}
    </PaddedContainer>
  );
};

export default Favorites;
