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
    type: "",
    category: "",
    subtype: ""
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

  uploadToState = () => {
    const type = this.props.match.params.type;
    const category = this.props.match.params.category;
    const subtype = this.props.match.params.subtype;
    const pathname = this.props.match.url ? this.props.match.url : "";
    fetch(`/settingsMenu/settings_${type}.json`)
      .then(response => response.json())
      .then(data => {
        console.log(data
          .find(element => element.name === subtype));
        this.setState({
          data: data.find(element => element.name === subtype)
            ? data.find(element => element.name === subtype)
            : data
                .find(element => element.name === category)
                .nested.find(element => element.name === subtype)
            ? data
                .find(element => element.name === category)
                .nested.find(element => element.name === subtype)
            : data
                .find(element => element.name === "konfiguracja sieci")
                .nested.find(element => element.name === "ethernet")
                .nested.find(element => element.name === subtype),
          url: pathname,
          subtype: subtype,
          category: category
        });
      });
  };

  componentDidMount() {
    this.uploadToState();
    console.log(this.state.data);
  }

  render() {
    const { data, subtype, url } = this.state;
    const activeContinue = this.state.data.nested.find(
      element => element.chosen === "tak"
    );
    console.log(this.props);
    console.log(this.state.data);
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
                <div>
                  <h2 className="graphyne-font header2">.../ {data.name}</h2>
                  {data.title ? (
                    <h2 className="graphyne-font header2 margin30-vertical white-text">
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
                <div className="graphyne-font font20">
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
                  <div className="graphyne-font font20" id="options-list">
                    {data.nested.map(option => (
                      <div
                        className="flex align-center justify-between"
                        key={option.name}
                      >
                        <div className="list-hover">
                          {option.nested ? (
                            <Link to={url + "/" + option.name}>
                              {option.name}
                            </Link>
                          ) : option.disabled ? (
                            <div className="gray-text">{option.name}</div>
                          ) : option.name === "automatyczne" &&
                            data.name === "wyszukiwanie kanałów" ? (
                            <Link to={url + "/" + option.name + "/szukanie"}>
                              {option.name}
                            </Link>
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
                    {this.state.data.continue ? (
                      <div
                        className={
                          activeContinue ||
                          data.vod ||
                          data.name === "aktualizacja oprogramowania"
                            ? "list-hover"
                            : "option-mute"
                        }
                      >
                        {activeContinue &&
                        activeContinue.name ===
                          "przywróć ustawienia domyślne" ? (
                          <Link to={`${url}/puf/start`}>Kontynuuj</Link>
                        ) : data.vod ? (
                          <Link to={`/ustawienia/instalacja`}>Kontynuuj</Link>
                        ) : data.name === "aktualizacja oprogramowania" ? (
                          <Link to={`/aktualne oprogramowanie/3`}>
                            Kontynuuj
                          </Link>
                        ) : (
                          "Kontynuuj"
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background-right-top flex-center"></div>
        </Container>
        {!this.state.setting.name ? (
          <Link to={this.state.url.replace(`/${subtype}`, "")}>Powrót</Link>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default SettingsNested;
