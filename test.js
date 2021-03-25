import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Home from "./components/pages/Home/Home";
import LoginPage from "./components/pages/login/LoginPage";
import AdminPage from "./components/pages/admin/AdminPage";
import ProductDetail from "./components/pages/Home/ProductDetail";
import AddProd from "./components/pages/admin/AddProd";
import EditProd from "./components/pages/admin/EditProd";
import { AuthProvider } from "./components/context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/admin" exact>
              <AdminPage />
            </Route>
            <Route path="/admin/adminPage" exact>
              <AddProd />
            </Route>
            <Route path="/admin/add" exact>
              <AddProd />
            </Route>
            <Route path="/admin/edit/:id" exact>
              <EditProd />
            </Route>
            <Route path="/detail/:id" exact component={ProductDetail} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

<div>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
  </ul>

  <hr />

  {/*
A <Switch> looks through all its children <Route>
elements and renders the first one whose path
matches the current URL. Use a <Switch> any time
you have multiple routes, but you want only one
of them to render at a time
*/}
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/detail/:id" exact component={ProductDetail} />
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/admin" exact>
      <AdminPage />
    </Route>
  </Switch>
</div>;
