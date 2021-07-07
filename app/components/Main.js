/********** Main.js ************/

import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home.js";
import Menu from "./Menu.js";
import Produit from "./Produit.js";
import Machine from "./Machine.js";
import Header from './header.js';
import Footer from './footer.js';

//Classe pour le menu de navigation
class Main extends Component {
  render() {
    return (
        
        <HashRouter>
        <div>
        <Header/>
          <h1>Nos machines à café</h1>
          <ul className="header">
            <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/Menu">Toutes nos machines</NavLink></li>
            <li><NavLink to="/Produit">Produit</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Menu" component={Menu}/>
          <Route path="/Produit" component={Produit}/>
        </div>
        <Footer/>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;