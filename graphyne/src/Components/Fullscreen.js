import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Fullscreen extends Component {
  render() {
    return (
    <Fragment>
        <img src={`${this.props.alt}.jpg`} alt={this.props.alt}/>
      <Link to="">Powrót</Link>
    </Fragment>
    );
  }
}

export default Fullscreen;
