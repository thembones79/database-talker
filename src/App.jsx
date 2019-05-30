import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Blank from "./components/Blank";
import Grid from "./components/Grid";
import List from "./components/List";
import Master_Detail from "./components/Master_Detail";
import Blank2 from "./components/Blank2";
import Grid2 from "./components/Grid2";
import List2 from "./components/List2";
import Master_Detail2 from "./components/Master_Detail2";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          < Redirect exact path = "/" to = "/Blank" />
          < Route path = "/Blank" component = { Blank } />
          < Route path = "/Grid" component = { Grid } />
          < Route path = "/List" component = { List } />
          < Route path = "/Master_Detail" component = { Master_Detail } />
          < Route path = "/Blank2" component = { Blank2 } />
          < Route path = "/Grid2" component = { Grid2 } />
          < Route path = "/List2" component = { List2 } />
          < Route path = "/Master_Detail2" component = { Master_Detail2 } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
