import React, { useContext } from "react";

export const FAVORITE_KEY = "favorites_v1";
export const FavoriteContext = React.createContext();
export const useFavorites = () => useContext(FavoriteContext);
export const useAllFavorites = () => {
  const favorites = useFavorites();
  let all = [];
  Object.keys(favorites).forEach((name) => {
    all = [
      ...all,
      ...(favorites[name].images || []).map((im) => ({
        ...im,
        list: name,
      })),
    ];
  });
  return all.filter((a) => !!a.id);
};

export const removeFavorite = (favorites, image) => {
  Object.keys(favorites).forEach((name) => {
    favorites[name].images = favorites[name].images
      ? favorites[name].images.filter((f) => f.id !== image.id)
      : [];
  });
  return { ...favorites };
};

export const removeList = (favorites, list) => {
  delete favorites[list];
  return { ...favorites };
};

export const editListTitle = (favorites, old, newList) => {
  const keys = Object.keys(favorites);
  const newFav = {};
  keys.forEach((k) => {
    if (k === old) {
      newFav[newList] = favorites[k];
    } else {
      newFav[k] = favorites[k];
    }
  });
  return newFav;
};

export const editListDescription = (favorites, list, description) => {
  favorites[list].description = description;
  return { ...favorites };
};
