import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, settings } from "../Components/Components.js";

class Settings extends Component {
  state = {
    data: [],
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
    const newSlides = this.state.data.forEach((element, index) => {
      if (element.name === this.state.setting.name) {
        this.state.data[index].chosen = choice;
      }
    });

    console.log(newSlides);

    this.setState({
      ...this.state,
      setting: {
        name: "",
        chosen: "",
        choices: []
      }
    });
    document.getElementById("options-list").style.display = "block";
    document.getElementById("option-display").style.display = "none";
  };

  componentDidMount() {
    const type = this.props.data
      ? this.props.data
      : this.props.match.params.type;
    const pathname = this.props.match.url ? this.props.match.url : "";
    fetch(`/settingsMenu/settings_${type}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
          activeSlideIndex: data.length - 1,
          type,
          url: pathname
        });
      });
  }

  render() {
    const { type, data } = this.state;
    console.log(this.state);
    return (
      <Fragment>
        <Container theme={settings}>
          <div className="vectra flex align-center justify-around">
            <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
          </div>
          <div className="clock flex align-center justify-end"></div>
          <div className="background-left-top flex align-center justify-around"></div>
          <div className="nav-selected auto-height nav-selected-padding">
            <div className="element-container">
              <h1 className="graphyne-font header1">ustawienia</h1>
              <div className="element-container">
                <div>
                  <h2 className="graphyne-font header2">
                    {type === "Menu" ? "" : `/ ${type}`}
                  </h2>
                  {data.title ? (
                    <h2 className="graphyne-font header2 font-weight800 margin30-vertical white-text">
                      {data.title}
                    </h2>
                  ) : data.vod ? (
                    <h2 className="graphyne-font header2 font-weight800 green-text margin30-vertical">
                      {data.vod}
                    </h2>
                  ) : (
                    ""
                  )}
                  <p className="gray-text font16">{data.description}</p>
                </div>
                <div className="graphyne-font font20" id="options-list">
                  {data.map(option => (
                    <div
                      className="flex align-center justify-between"
                      key={option.name}
                    >
                      <div className="list-hover graphyne-font">
                        {option.nested ? (
                          <Link to={this.state.url + "/" + option.name}>
                            {option.name}
                          </Link>
                        ) : option.disabled ? (
                          <div className="gray-text">{option.name}</div>
                        ) : (
                          <div onClick={() => this.startChoosing(option)}>
                            {option.name}
                          </div>
                        )}
                      </div>
                      <div className="font16">
                        {option.chosen ? option.chosen : ""}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="graphyne-font font20 flex align-bottom justify-between"
                  id="option-display"
                >
                  <div className="blue font-weight800 font21">
                    {this.state.setting.name}
                  </div>
                  <br />
                  <div className="flex-column flex">
                    {this.state.setting.choices.map(choice => (
                      <div
                        className="list-hover"
                        onClick={() => this.pickChoice(choice)}
                        key={choice}
                      >
                        {choice}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background-right-top"></div>
        </Container>
        {!this.state.setting.name ? (
          <Link to={this.state.url.replace(`/${type === "Menu" ? "ustawienia" : type}`, "")}>Powrót</Link>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default Settings;
