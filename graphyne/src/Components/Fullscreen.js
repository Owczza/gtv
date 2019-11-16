import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import "../App.css";
import { Button } from "../Components/Components.js";

class Fullscreen extends Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        redirect: true
      });
    }, 2000);
  }

  render() {
    return (
    this.state.redirect && this.props.alt === "puf" ? 
      <Redirect to={"/puf/1"} /> :
      <Fragment>
        <img src={`${this.props.alt}.jpg`} alt={this.props.alt} />
        <br />
        <Link to="">
          <Button />
        </Link>
      </Fragment>
    );
  }
}

export default Fullscreen;
