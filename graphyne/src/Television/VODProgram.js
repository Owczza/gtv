import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Main, Container, Button, Text, Title, ProgramTitle, Description } from "../Components/Components.js";

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
    const { list, activeProgram } = this.state;
    return (
      <Fragment>
        <Main program>
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
              <Text paragraph white>
                Cena: {activeProgram.price}
                <br />
                Czas wypożyczenia: {activeProgram.duration}
              </Text>
            </div>
          </div>
          <div className="background-left-bottom program-shadow">
            <div className="nav-selected-padding padding145-top no-padding-bottom">
              <ProgramTitle>
                {activeProgram.title}
              </ProgramTitle>
              <Text lowercase>
                {activeProgram.type +
                  " / " +
                  activeProgram.country +
                  " / " +
                  activeProgram.year +
                  " / " +
                  activeProgram.PG}
              </Text>
              <br />
              <br />
              <Description>
                Reżyseria: {activeProgram.director} <br />
                Występują: {activeProgram.actors} <br />
              </Description>
              <br />
              <Description>
                {activeProgram.description}
              </Description>
            </div>
          </div>
          <div className="background-right-top flex justify-start align-center padding20-left">
            <div className="padding145-top">
              {list.map(option => (
                <Title list key={option}>
                  {option}
                </Title>
              ))}
            </div>
          </div>
        </Main>
        <Link
          to={this.props.match.url.replace(
            `/${this.props.match.params.channelNumber}`,
            ""
          )}
        >
          <Button />
        </Link>
      </Fragment>
    );
  }
}

export default VODProgram;
