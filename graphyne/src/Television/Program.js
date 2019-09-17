import React, { Component } from "react";
import "../App.css";
import { Container, program } from "../Components/Components.js";

class Program extends Component {
  state = {
    list: [],
    activeProgram: {}
  };

  componentDidMount() {
    const { channelNumber } = this.props.match.params;
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
        const activeProgram = programs[0].find(
          program => program.channelNumber === Number(channelNumber)
        );
        this.setState({ activeProgram });
      });
  }

  render() {
    const { list, activeProgram } = this.state;
    return (
      <Container theme={program}>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="background-right-bottom"></div>
        <div className="clock flex-center"></div>
        <div className="background-left-top flex-center program-shadow">
          <div className="filler flex-center align-bottom padding50-bottom padding60-right padding20-left">
            <h1 className="graphyne-font program-channel-number">
              {activeProgram.channelNumber}
            </h1>
            <img src={activeProgram.icon} alt="Channel Logo" />
          </div>
        </div>
        <div className="background-left-bottom program-shadow">
          <div className="nav-selected-padding padding200-top no-padding-bottom white-text">
            <h1 class="font-weight400">{activeProgram.title}</h1>
            <div className="separator"></div>
            <span className="font20">
              {activeProgram.time} / {activeProgram.type}
            </span>
            <br />
            <br />
            <p>{activeProgram.description}</p>
            <br />
            <p>
              Gatunek: {activeProgram.genre} <br />
              Produkcja: {activeProgram.production} <br />
              {activeProgram.orgTitle
                ? `Tytuł oryginalny: ${activeProgram.orgTitle}`
                : activeProgram.actors
                ? `Aktorzy: ${activeProgram.actors}`
                : ""}
            </p>
          </div>
        </div>
        <div className="background-right-top flex-center">
          <div className="nav-selected-padding no-padding-bottom">
            <ul>
              {list.map(option => (
                <li className="list-line-height header1 gray-text" key={option}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    );
  }
}

export default Program;
