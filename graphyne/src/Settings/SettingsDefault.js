import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, settings } from "../Components/Components.js";

class SettingsDefault extends Component {
  state = {
    data: { nested: [{}] },
    choosing: false,
    url: ""
  };

  pickChoice = choice => {
    this.setState({
      ...this.state,
      data: { nested: { ...this.state.data, chosen: choice } },
      choosing: false
    });
  };

  startChoosing = () => {
    this.setState({
      ...this.state,
      choosing: true
    });
  };

  uploadToState = () => {
    this.setState({
      data: this.props.location.option
    });
  };

  componentDidMount() {
    this.uploadToState();
  }

  render() {
    const data = this.state.data;
    const option = data.nested[0];
    return (
      <Container theme={settings}>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="clock flex-center"></div>
        <div className="background-left-top flex-center"></div>
        <div className="nav-selected auto-height nav-selected-padding">
          <div className="element-container">
            <h1 className="graphyne-font header1">ustawienia</h1>
            <div className="element-container">
              <h2 className="graphyne-font header2">.../ {data.name}</h2>
              <div className="graphyne-font font20">
                <span className="list-hover">{option.name}</span>
                {this.state.choosing === false ? (
                  <span className="font16" onClick={() => this.startChoosing()}>
                    {option.chosen}
                  </span>
                ) : (
                  <div className="flex-column flex">
                    {data.choices.map(choice => (
                      <span
                        className="list-hover"
                        onClick={() => this.pickChoice(choice)}
                        key={choice}
                      >
                        {choice}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {option.chosen === "tak" ? (
                <Link to="/confirm" className="list-hover">
                  kontynuuj
                </Link>
              ) : (
                <span className="opion-mute">kontynuuj</span>
              )}
            </div>
          </div>
        </div>
        <div className="background-right-top flex-center"></div>
      </Container>
    );
  }
}

export default SettingsDefault;
