import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import LoginPage from "../pages/login/LoginPage";
import ProductDetail from "../pages/home/ProductDetail";
import { AuthProvider } from "../context/AuthContext";
import Nav from "./Nav";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Layout() {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail/:id" exact component={ProductDetail} />
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

// You can think of these components as "pages"
// in your app.

// Level 1
// Your app should have the following paths:

// "/"                  <<<done>>><
//  "/contact"          <<<done>>><
//  "/login"             <<<done>>><
// "/admin"
//  "/detail/:param"
