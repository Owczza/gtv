import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, television } from "../Components/Components.js";

class PUF extends Component {
  state = {
    slides: [],
    activeSlideIndex: null,
    setting: {
      name: "",
      title: "",
      description: "",
      choices: []
    },
    test: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`/pufMenu/pufMenu.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          slides: data,
          activeSlideIndex: id,
          setting: {...this.state.setting, choices: [1, 2, 3]}
        });
      });
  }

  render() {
    return (
      <Container theme={television}>
        <div className="vectra flex align-center justify-around"></div>
        <div className="clock flex align-center justify-end"></div>
        <div className="background-left-top flex align-center justify-around"></div>
        <div className="nav-selected auto-height nav-selected-padding">
          <div className="element-container">
            <h1 className="graphyne-font header1">pierwsza instalacja</h1>
            <div className="element-container">
              <h2 className="graphyne-font header2">{`/ ${setting.name}`}</h2>
              <div className="graphyne-font font20" id="options-list">
                {setting.choices.map(option => (
                  <div
                    className="flex align-center justify-between"
                    key={option.name}
                  >
                    {setting.choices.indexOf(option) === setting.choices.length - 1 ? (
                      <span className="list-hover graphyne-font">
                        {option.name}
                      </span>
                    ) : (
                      <span className="graphyne-font">{option.name}</span>
                    )}
                    <span className="font16">
                      {option.chosen ? option.chosen : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="background-right-top"></div>
      </Container>
    );
  }
}

export default PUF;
