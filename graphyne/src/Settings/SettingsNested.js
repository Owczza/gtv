import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, settings } from "../Components/Components.js";

class SettingsNested extends Component {
  state = {
    data: { nested: [], choices: [] },
    activeSlideIndex: null,
    setting: {
      name: "",
      chosen: "",
      choices: []
    },
    url: ""
  };

  startChoosing = option => {
    this.setState({
      ...this.state,
      setting: option
    });
    document.getElementById("options-list").style.display = "none";
    document.getElementById("option-display").style.display = "flex";
  };

  pickChoice = choice => {

    const newSlides = this.state.data.nested.forEach((element, index) => {
      if (element.name === this.state.setting.name) {
        this.state.data.nested[index].chosen = choice
      };})

      console.log(newSlides)

    this.setState({
      ...this.state,
    });
    document.getElementById("options-list").style.display = "block";
    document.getElementById("option-display").style.display = "none";
  };

  uploadToState = () => {
    const choosing = this.props.location.option.nested ? 0 : false;
    const activeSlideIndex = this.props.location.option.nested
      ? this.props.location.option.nested.length - 1
      : true;
    const pathname = this.props.match.url ? this.props.match.url : "";
    this.setState({
      data: this.props.location.option,
      activeSlideIndex,
      choosing,
      url: pathname
    });
  };

  componentDidMount() {
    this.uploadToState();
  }

  render() {
    const data = this.state.data;
    console.log(data);
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
                <div className="graphyne-font font20" id="options-list">
                {this.state.data.nested.map(option => (
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
                {this.state.data.continue? <span className={this.state.data.nested.includes((element, index) => element[index].name === "ustawienia domyślne" && element[index].chosen === "tak") ? }></span>
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
        </div>
        <div className="background-right-top flex-center"></div>
      </Container>
    );
  }
}

export default SettingsNested;
