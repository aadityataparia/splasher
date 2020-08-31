import React, { useCallback } from "react";
import { useFavorites, editListDescription } from "../../hooks/favorites";
import EditableText from "./EditableText";

const EditListDescription = ({ setFavorite, list, description }) => {
  const favorites = useFavorites();
  const onSubmit = useCallback(
    (v) => {
      setFavorite(editListDescription(favorites, list, v));
    },
    [favorites, list, setFavorite]
  );

  return <EditableText value={description} onSubmit={onSubmit}></EditableText>;
};

export default EditListDescription;
