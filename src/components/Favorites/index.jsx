import React from "react";
import { PageHeader } from "antd";
import { PaddedContainer } from "../GenericStyles";
import { useFavorites } from "../../hooks/favorites";
import DeleteListButton from "./DeleteListButton";
import Images from "../ImagesList/Images";
import EditListTitle from "./EditListTitle";
import EditListDescription from "./EditListDescription";

const Favorites = ({ setFavorite }) => {
  const favorites = useFavorites();
  return (
    <PaddedContainer>
      <h1>Favorites</h1>
      {Object.keys(favorites).map((list) => (
        <React.Fragment key={list}>
          <PageHeader
            title={
              <EditListTitle
                setFavorite={setFavorite}
                list={list}
              ></EditListTitle>
            }
            subTitle={
              <EditListDescription
                setFavorite={setFavorite}
                list={list}
                description={favorites[list].description || ""}
              ></EditListDescription>
            }
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
