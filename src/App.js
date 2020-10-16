import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import AddService from "./components/AdminLogin/AddService/AddService";
import AdminLogin from "./components/AdminLogin/AdminLogin/AdminLogin";
import MakeAdmin from "./components/AdminLogin/MakeAdmin/MakeAdmin";
import Review from "./components/CustomerLogin/Review/Review";
import ServiceList from "./components/CustomerLogin/ServiceList/ServiceList";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <PrivateRoute path="/order">
            <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/service-list">
          <ServiceList></ServiceList>
        </Route>

        <Route path="/admin">
            <AdminLogin></AdminLogin>
        </Route>
        <Route path="/add-service">
            <AddService></AddService>
        </Route>
        <Route path="/make-admin">
            <MakeAdmin></MakeAdmin>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
