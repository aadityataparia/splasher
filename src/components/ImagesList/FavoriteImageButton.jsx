import React, { useCallback, useState } from "react";
import { FileAddOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useAsyncCallback } from "../../hooks/async";
import {
  useAllFavorites,
  removeFavorite,
  useFavorites,
} from "../../hooks/favorites";
import AddFavoriteForm from "./AddFavoriteForm";
import { showNotification } from "../../utils/notify";

const FavoriteImageButton = ({ data, setFavorite }) => {
  const [showModel, setShowModel] = useState(false);
  const allFavorites = useAllFavorites();
  const favorites = useFavorites();
  const isFavorite = allFavorites.find((f) => f.id === data.id);

  const _showModal = useCallback(() => setShowModel(true), []);
  const _hideModal = useCallback(() => setShowModel(false), []);

  const { isLoading, callback: addFavorite } = useAsyncCallback(
    ({ image, list, description }) => {
      console.log(image, list, description, favorites[list]);
      favorites[list] = favorites[list] || {
        images: [],
        description,
      };
      favorites[list].description = description;
      favorites[list].images.push(image);
      return setFavorite({ ...favorites })
        .then(_hideModal)
        .then(() => {
          showNotification("success", "Image added to " + list);
        });
    },
    [favorites]
  );

  const _removeFavorite = useCallback(() => {
    setFavorite(removeFavorite(favorites, data)).then(() => {
      showNotification("warning", "Image was removed from favorites");
    });
  }, [data, favorites, setFavorite]);

  return (
    <React.Fragment>
      <Button
        shape="round"
        ghost
        loading={isLoading}
        icon={
          isFavorite ? (
            <DeleteOutlined></DeleteOutlined>
          ) : (
            <FileAddOutlined></FileAddOutlined>
          )
        }
        onClick={isFavorite ? _removeFavorite : _showModal}
      >
        {isFavorite ? isFavorite.list : ""}
      </Button>
      {showModel && (
        <AddFavoriteForm
          visible={showModel}
          hide={_hideModal}
          data={data}
          onSubmit={addFavorite}
        ></AddFavoriteForm>
      )}
    </React.Fragment>
  );
};

export default FavoriteImageButton;
