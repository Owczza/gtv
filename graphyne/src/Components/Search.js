import React, { Component } from "react";
import "../App.css";

class Television extends Component {
  state = {
    input: "",
    alphabet: []
  };

  componentDidMount() {      
    fetch(`/Menu/alphabet.json`)
    .then(response => response.json())
    .then(data => {
      this.setState({
          ...this.state,
          alphabet: data
      });
    });
  }

  render() {
    return (
        <span> { this .state.alphabet.map( element => element)}</span>
    );
  }
}

export default Television;
