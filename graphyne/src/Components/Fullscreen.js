import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "../Components/Components.js";

class Fullscreen extends Component {
  render() {
    return (
    <Fragment>
        <img src={`${this.props.alt}.jpg`} alt={this.props.alt}/><br />
      <Link to=""><Button /></Link>
    </Fragment>
    );
  }
}

export default Fullscreen;
