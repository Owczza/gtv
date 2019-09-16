import React, { Component } from "react";
import "../App.css";
import { Container, program } from "../Components/Components.js";

class Program extends Component {
  state = {
    list: [],
    activeProgram: {}
  };

  componentDidMount() {
    const { channelNumber } = this.props.match.params
    fetch(`/televisionMenu/television${this.props.data}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          list: data
        });
      });


      fetch(`/televisionMenu/television${this.props.subData}.json`)
      .then(response => response.json())
      .then(programs => {
        const activeProgram = programs.find(program => program.channelNumber === Number(channelNumber));

        this.setState({ activeProgram });
      });
  }

  render() {
    const { list, activeProgram } = this.state;
    console.log(activeProgram)
    return (
      <Container theme={program}>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="background-right-bottom"></div>
        <div className="clock flex-center"></div>
        <div className="background-left-top flex-center program-shadow">
          <div className="filler"></div>
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
