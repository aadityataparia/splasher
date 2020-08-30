import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Header from "./components/Page/Header";
import FavoritePage from "./pages/FavoritePage";
import ImagesPage from "./pages/ImagesPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Layout.Header>
          <Header></Header>
        </Layout.Header>
        <Switch>
          <Route path="/favorites" render={() => <FavoritePage />} exact />
          <Route path="/**" render={() => <ImagesPage />} exact />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
