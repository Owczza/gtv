import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, program } from "../Components/Components.js";

class VODProgram extends Component {
  state = {
    list: [],
    activeProgram: {}
  };

  componentDidMount() {
    const { channelNumber } = this.props.match.params;
    fetch(`/vodMenu/vodProgram.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          list: data
        });
      });

    fetch(`/vodMenu/vodMenu.json`)
      .then(response => response.json())
      .then(programs => {
        const activeProgram = programs[0].find(
          program => program.channelNumber === Number(channelNumber)
        );
        this.setState({ activeProgram });
      });
  }

  render() {
    console.log(this.props);
    const { list, activeProgram } = this.state;
    return (
      <Fragment>
      <Container theme={program}>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="background-right-bottom"></div>
        <div className="clock flex-center"></div>
        <div className="background-left-top flex-center program-shadow">
          <div className="filler flex-center padding50-bottom flex-column justify-end">
            <img
              src={activeProgram.image}
              className="width200"
              alt={activeProgram.title}
            />
            <h3 className="white-text font-weight400">
              <span className="font21">Cena: {activeProgram.price}</span><br />
              Czas wypożyczenia: {activeProgram.duration}
            </h3>
          </div>
        </div>
        <div className="background-left-bottom program-shadow">
          <div className="nav-selected-padding padding145-top no-padding-bottom white-text">
            <h1 className="font-weight400">{activeProgram.title}</h1>
            <h3 className="font-weight400">
              {activeProgram.type +
                " / " +
                activeProgram.country +
                " / " +
                activeProgram.year +
                " / " +
                activeProgram.PG}
            </h3>
            <br />
            <br />
            <p>
              Reżyseria: {activeProgram.director} <br />
              Występują: {activeProgram.actors} <br />
            </p>
            <br />
            <p>{activeProgram.description}</p>
          </div>
        </div>
        <div className="background-right-top flex justify-start align-center padding20-left">
          <div className="padding145-top padding20-left">
            <ul>
              {list.map(option => (
                <li
                  className="list-line-height header1 gray-text program-list-hover"
                  key={option}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <Link to={this.props.match.url.replace(`/${this.props.match.params.channelNumber}`, "")}>Powrót</Link>
    </Fragment>
    );
  }
}

export default VODProgram;
