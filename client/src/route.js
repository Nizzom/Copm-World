import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dislikes from "./pages/Dislikes";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Param from "./pages/Param";
import Views from "./pages/Views";

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/content/:id">
        <Param />
      </Route>
      <Route path="/liked">
        <Likes />
      </Route>
      <Route path="/disliked">
        <Dislikes />
      </Route>
      <Route path="/views">
        <Views />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};
