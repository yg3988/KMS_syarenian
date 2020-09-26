//import node_modules
import React, { Component } from 'react';

//import axios servies
import api from "../services/index";

//import component
import Home from "../components/home"

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Home
        service={api.searchGuild}
      />
    );
  }
}

export default HomeContainer;