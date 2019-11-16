import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, Button } from "../Components/Components.js";
import { ProgramDescription } from "./ProgramDescription";

class Program extends Component {
  state = {
    list: [],
    activeProgram: {}
  };

  componentDidMount() {
    const { channelNumber } = this.props.match.params;
    fetch(`/${this.props.data}Menu/${this.props.data}Program.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          list: data
        });
      });

    fetch(`/${this.props.data}Menu/${this.props.data}Menu.json`)
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
    const { data } = this.props;
    console.log(activeProgram.icon);
    return (
      <Fragment>
        <Container program>
          <div className="vectra flex-center">
            <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
          </div>
          <div className="background-right-bottom"></div>
          <div className="clock flex-center"></div>
          <div className="background-left-top flex-center program-shadow">
            <div
              className={`filler flex-center padding50-bottom ${
                data === "recordings"
                  ? "flex-column justify-end"
                  : "align-bottom padding60-right padding20-left"
              }`}
            >
              {data === "recordings" ? (
                <img
                  src={activeProgram.image}
                  className="width200"
                  alt={activeProgram.title}
                />
              ) : data === "television" ? (
                <h1 className="graphyne-font program-channel-number">
                  {activeProgram.channelNumber}
                </h1>
              ) : (
                ""
              )}
              <img src={activeProgram.icon} alt="Channel Logo" />
            </div>
          </div>
          <div className="background-left-bottom program-shadow">
            {data === "reminders" ? (
              ""
            ) : (
              <div className="nav-selected-padding padding145-top no-padding-bottom white-text">
                <h1 className="font-weight400">{activeProgram.title}</h1>
                {data === "television" ? (
                  <div className="separator"></div>
                ) : (
                  <h3 className="font-weight400">{activeProgram.genre}</h3>
                )}
                <span className="font20">
                  {activeProgram.time}
                  {activeProgram.type}
                  {}
                </span>
                <br />
                <br />
                <p>{activeProgram.description}</p>
                <br />
                {data !== "recordings" ? (
                  <ProgramDescription
                    activeProgram={this.state.activeProgram}
                  />
                ) : (
                  ""
                )}
              </div>
            )}
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

export default Program;
