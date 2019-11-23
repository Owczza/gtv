import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Main, Container, Button, Text, Title, Info } from "../Components/Components.js";

class Settings extends Component {
  state = {
    data: [],
    activeSlideIndex: null,
    setting: {
      name: "",
      chosen: "",
      choices: []
    },
    url: "",
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
    const newSlides = this.state.data.forEach((element, index) => {
      if (element.name === this.state.setting.name) {
        this.state.data[index].chosen = choice;
      }
    });

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

  componentDidMount() {
    const type = this.props.data
      ? this.props.data
      : this.props.match.params.type;
    const pathname = this.props.match.url ? this.props.match.url : "";
    fetch(`/settingsMenu/settings_${type}.json`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
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
    console.log(this.props)
    return (
      <Fragment>
        <Main settings>
          <div className="vectra flex align-center justify-around">
            <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
          </div>
          <div className="clock flex align-center justify-end"></div>
          <div className="background-left-top flex align-center justify-around"></div>
          <div className="nav-selected auto-height nav-selected-padding">
            <div className="element-container">
              <Title noMargin>ustawienia</Title>
              <div className="element-container">
                <div>
                  <Text>
                    {type === "Menu" ? "" : `/ ${type}`}
                  </Text>
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
                  <Info>{data.description}</Info>
                </div>
                <div id="options-list">
                  {data.map(option => (
                    <div
                      className="flex align-center justify-between"
                      key={option.name}
                    >
                        {option.nested ? (
                          <Text list><Link to={this.state.url + "/" + option.name}>
                            {option.name}
                          </Link></Text>
                        ) : option.disabled ? (
                          <Text list disabled>{option.name}</Text>
                        ) : (
                          <Text list onClick={() => this.startChoosing(option)}>
                            {option.name}
                          </Text>
                        )}
                      <Text small>
                        {option.chosen ? option.chosen : ""}
                      </Text>
                    </div>
                  ))}
                </div>
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
                      <Text list
                        className="list-hover"
                        onClick={() => this.pickChoice(choice)}
                        key={choice}
                      >
                        {choice}
                      </Text>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background-right-top"></div>
        </Main>
        {!this.state.setting.name ? (
          <Link to={this.state.url.replace(`/${type === "Menu" ? "ustawienia" : type}`, "")}><Button /></Link>
        ) : (
          <Button onClick={() => this.noChoice()}/>
        )}
      </Fragment>
    );
  }
}

export default Settings;
