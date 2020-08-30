import React, { useState, useEffect, useCallback } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import storage from "./utils/storage";
import "antd/dist/antd.css";
import Header from "./components/Page/Header";
import FavoritePage from "./pages/FavoritePage";
import ImagesPage from "./pages/ImagesPage";
import { FAVORITE_KEY, FavoriteContext } from "./hooks/favorites";

const initialFavorites = {};

const App = () => {
  const [favorites, setFavorites] = useState(initialFavorites);

  const _setFavorites = useCallback(
    (v) => Promise.all([storage.set(FAVORITE_KEY, v), setFavorites(v)]),
    []
  );

  useEffect(() => {
    const getFavorites = async () => {
      const favorites = (await storage.get([FAVORITE_KEY]))[FAVORITE_KEY];
      if (favorites) {
        _setFavorites(
          (await storage.get([FAVORITE_KEY]))[FAVORITE_KEY] || initialFavorites
        );
      } else {
        _setFavorites(initialFavorites);
      }
    };
    getFavorites();
  }, [_setFavorites]);

  return (
    <Router>
      <FavoriteContext.Provider value={favorites}>
        <Layout>
          <Layout.Header>
            <Header></Header>
          </Layout.Header>
          <Switch>
            <Route
              path="/favorites"
              render={() => <FavoritePage setFavorite={_setFavorites} />}
              exact
            />
            <Route
              path="/**"
              render={() => <ImagesPage setFavorite={_setFavorites} />}
              exact
            />
          </Switch>
        </Layout>
      </FavoriteContext.Provider>
    </Router>
  );
};

export default App;
