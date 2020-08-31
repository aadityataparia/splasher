import React, { useCallback } from "react";
import { useFavorites, editListTitle } from "../../hooks/favorites";
import EditableText from "./EditableText";

const EditListTitle = ({ setFavorite, list }) => {
  const favorites = useFavorites();
  const onSubmit = useCallback(
    (v) => {
      setFavorite(editListTitle(favorites, list, v));
    },
    [favorites, list, setFavorite]
  );

  return <EditableText value={list} onSubmit={onSubmit}></EditableText>;
};

export default EditListTitle;
