import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Main, Container, Button, Text } from "../Components/Components.js";

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
    subtype: "",
    isChoosing: false
  };

  startChoosing = option => {
    this.setState({
      ...this.state,
      setting: option,
      isChoosing: true
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

    this.setState({
      ...this.state,
      data: { ...this.state.data, mute: choice === "tak" ? false : true },
      setting: {
        name: "",
        chosen: "",
        choices: []
      },
      isChoosing: false
    });
    document.getElementById("options-list").style.display = "block";
    document.getElementById("option-display").style.display = "none";
  };

  noChoice = () => {
    this.setState({
      ...this.state,
      setting: {
        name: "",
        chosen: "",
        choices: []
      },
      isChoosing: false
    });
    document.getElementById("options-list").style.display = "block";
    document.getElementById("option-display").style.display = "none";
  };

  uploadToState = () => {
    const type = this.props.match.params.type;
    const category = this.props.match.params.category;
    const subtype = this.props.match.params.subtype;
    const nested = this.props.match.params.nested;
    const pathname = this.props.match.url ? this.props.match.url : "";
    fetch(`/settingsMenu/settings_${type}.json`)
      .then(response => response.json())
      .then(data => {
        console.log(data.find(element => element.name === subtype));
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
                .find(element => element.name === category)
                .nested.find(element => element.name === nested)
                .nested.find(element => element.name === subtype),
          url: pathname,
          subtype: subtype,
          category: category
        });
      });
  };

  componentDidMount() {
    this.uploadToState();
  }

  render() {
    const { data, subtype, url } = this.state;
    console.log(this.state);
    return (
      <Fragment>
        <Main settings>
          <div className="vectra flex-center">
            <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
          </div>
          <div className="clock flex-center"></div>
          <div className="background-left-top flex-center"></div>
          <div className="nav-selected auto-height nav-selected-padding">
            <div className="element-container">
              <Text title>ustawienia</Text>
              <div className="element-container">
                <div>
                  <Text>.../ {data.name}</Text>
                  {data.title ? (
                    <Text small white bold className="margin30-vertical">
                      {data.title}
                    </Text>
                  ) : data.vod ? (
                    <Text small green bold className="margin30-vertical">
                      {data.vod}
                    </Text>
                  ) : (
                    ""
                  )}
                  <Text paragraph>{data.description}</Text>
                </div>
                <div>
                  <div
                    className="flex align-bottom justify-between"
                    id="option-display"
                  >
                    <Text list blue bold>
                      {this.state.setting.name}
                    </Text>
                    <br />
                    <div className="flex-column flex">
                      {this.state.setting.choices.map(choice => (
                        <Text
                          list
                          onClick={() => this.pickChoice(choice)}
                          key={choice}
                        >
                          {choice}
                        </Text>
                      ))}
                    </div>
                  </div>
                  <div id="options-list">
                    {data.nested.map(option => (
                      <Text
                        list
                        className="flex align-center justify-between"
                        key={option.name}
                      >
                        {option.disabled ? (
                          <Text list disabled>
                            {option.name}
                          </Text>
                        ) : option.nested ? (
                          <Link to={url + "/" + option.name}>
                            {option.name}
                          </Link>
                        ) : option.name === "automatyczne" &&
                          data.name === "wyszukiwanie kanałów" ? (
                          <Link
                            to={url + "/" + option.name + "/szukanie/start"}
                          >
                            {option.name}
                          </Link>
                        ) : (
                          <div onClick={() => this.startChoosing(option)}>
                            {option.name}
                          </div>
                        )}
                        <Text small>
                          {option.image ? <img src={option.image} /> : ""}
                          {option.chosen ? option.chosen : ""}
                        </Text>
                      </Text>
                    ))}
                    {data.continue ? (
                      <div>
                        {data.mute ? (
                          <Text list mute>
                            Kontynuuj
                          </Text>
                        ) : data.name === "przywróć ustawienia domyślne" ? (
                          <Text list>
                            <Link to={`${url}/puf/start/popup`}>Kontynuuj</Link>
                          </Text>
                        ) : data.vod ? (
                          <Text list>
                            <Link to={`/ustawienia/instalacja`}>Kontynuuj</Link>
                          </Text>
                        ) : data.name === "aktualizacja oprogramowania" ? (
                          <Text list>
                            <Link to={`/aktualne oprogramowanie/3`}>
                              Kontynuuj
                            </Link>
                          </Text>
                        ) : (
                          <Text list>
                            <Link to={`${url}/puf/start/popup`}>Kontynuuj</Link>
                          </Text>
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
        </Main>
        {!this.state.isChoosing ? (
          <Link to={this.state.url.replace(`/${subtype}`, "")}>
            <Button />
          </Link>
        ) : (
          <Button onClick={() => this.noChoice()} />
        )}
      </Fragment>
    );
  }
}

export default SettingsNested;
