import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, settings } from "../Components/Components.js";

class SettingsNested extends Component {
  state = {
    data: { nested: [], choices: [] },
    setting: {
      name: "",
      chosen: "",
      choices: []
    },
    url: "",
    type: ""
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
        this.state.data.nested[index].chosen = choice;
      }
    });

    console.log(newSlides);

    this.setState({
      ...this.state
    });
    document.getElementById("options-list").style.display = "block";
    document.getElementById("option-display").style.display = "none";
  };

  uploadToState = () => {
    const type = this.props.match.params.type;
    const subtype = this.props.match.params.subtype;
    const pathname = this.props.match.url ? this.props.match.url : "";
    fetch(`/settingsMenu/settings_${type}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.find(element => element.name === subtype),
          url: pathname,
          subtype: subtype
        });
      });
  };


  componentDidMount() {
    this.uploadToState();
  }

  render() {
    const data = this.state.data;
    const activeContinue = this.state.data.nested.find(
      element => element.chosen === "tak"
    );
    console.log(this.state);
    return (
      <Fragment>
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
                            <Link to={this.state.url + "/" + option.name}>
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
                    {this.state.data.continue ? (
                      <span
                        className={
                          activeContinue ? "list-hover" : "option-mute"
                        }
                      >
                        {activeContinue &&
                        activeContinue.name ===
                          "przywróć ustawienia domyślne" ? (
                          <Link to={`${this.state.url}/puf`}>Kontynuuj</Link>
                        ) : (
                          "Kontynuuj"
                        )}
                      </span>
                    ) : (
                      ""
                    )}
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
        <Link to={this.state.url.replace(`/${this.state.subtype}`, "")}>
          Powrót
        </Link>
      </Fragment>
    );
  }
}

export default SettingsNested;
