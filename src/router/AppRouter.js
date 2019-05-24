import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../components/App";
import About from "../pages/About";
import Navigation from "../components/Navigation";
import SeeMore from "../components/SeeMore";
import Home from "../pages/Home";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={App} />
        <Route path="/about" component={About} />
        <Route path="/product/:id" component={SeeMore} />
      </Switch>
    </BrowserRouter>
  );
}
