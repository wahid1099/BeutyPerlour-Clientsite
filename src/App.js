import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Register from "./PrivateRoute/Register";
import AuthProvider from "./Context/AuthProvider";
import Menu from "./Component/NavBar/Menu";
import React from "react";
import Footer from "./Component/Footer/Footer";
import Login from "./PrivateRoute/Login";
import PlaceOrder from "./Component/PlaceOrder/PlaceOrder";
import DashBoardHome from './Component/DashBoard/DashBoardHome';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <BrowserRouter>
            <Menu></Menu>
            <Switch>
                <Route exact path="/">
                    <HomePage></HomePage>

                </Route>
                <Route exact path="/home">
                    <HomePage></HomePage>

                </Route>
                <Route exact path="/register">
                    <Register></Register>

                </Route>
                <Route exact path="/login">
                    <Login></Login>
                </Route>
                <Route  path="/dashboard">
                 <DashBoardHome></DashBoardHome>
                </Route>
                <Route  path="/placeorder/:serviceId">
                    <PlaceOrder></PlaceOrder>
                </Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
