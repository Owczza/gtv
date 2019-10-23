import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, settings } from "../Components/Components.js";

class PUF extends Component {
  state = {
    slides: [],
    activeSlideIndex: null,
    setting: {
      name: "",
      chosen: "",
      choices: []
    }
  }

  render () {
    const type = this.state.type;
    return (
      <Container theme={settings}>
        <div className="vectra flex align-center justify-around"></div>
        <div className="clock flex align-center justify-end"></div>
        <div className="background-left-top flex align-center justify-around"></div>
        <div className="nav-selected auto-height nav-selected-padding">
          <div className="element-container">
            <h1 className="graphyne-font header1">pierwsza instalacja</h1>
            <div className="element-container">
              <h2 className="graphyne-font header2">
                {type === "Menu" ? "" : `/ ${type}`}
              </h2>
              <div className="graphyne-font font20" id="options-list">
                {this.state.slides.map(option => (
                  <div
                    className="flex align-center justify-between"
                    key={option.name}
                  >
                    <span className="list-hover">
                      {option.nested ? (
                        <Link
                          to={{
                            pathname: this.state.url + "/" + option.name,
                            option
                          }}
                        >
                          {option.name}
                        </Link>
                      ) : (
                        <span onClick={() => this.startChoosing(option)}>
                          {option.name}
                        </span>
                      )}
                    </span>
                    <span className="font16">
                      {option.chosen ? option.chosen : ""}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="graphyne-font font20 flex align-bottom justify-between"
                id="option-display"
              >
                <span className="blue font-weight800 font21">
                  {this.state.setting.name}
                </span>
                <br />
                <div className="flex-column flex">
                  {this.state.setting.choices.map(choice => (
                    <span
                      className="list-hover"
                      onClick={() => this.pickChoice(choice)}
                      key={choice}
                    >
                      {choice}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background-right-top"></div>
      </Container>
    )
  }
}

export default PUF;