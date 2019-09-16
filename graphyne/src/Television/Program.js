import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, program } from "../Components/Components.js";

class Program extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    fetch(`/televisionMenu/television${this.props.data}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          list: data
        });
      });
  }

  render() {
    const { list } = this.state;
    return (
      <Container theme={program}>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="background-right-bottom"></div>
        <div className="clock flex-center"></div>
        <div className="background-left-top flex-center program-shadow">
          <div class="filler"></div>
        </div>
        <div className="background-left-bottom flex-center program-shadow"></div>
        <div className="background-right-top flex-center">
          <div className="nav-selected-padding no-padding-bottom">
            <ul>
              {list.map(option => (
                <li className="list-line-height header1 white-text">{option}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    );
  }
}

export default Program;
