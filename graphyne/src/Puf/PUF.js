import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Main, Container, Button, Text } from "../Components/Components.js";

class PUF extends Component {
  state = {
    slides: [],
    activeSlideIndex: null,
    setting: {
      name: "",
      title: "",
      description: "",
      vod: "",
      choices: []
    }
  };

  loadData = () => {
    const id = this.props.match.params.id;
    fetch(`/pufMenu/pufMenu.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          slides: data,
          activeSlideIndex: parseInt(id, 10),
          setting: data
            .filter(setting => setting.id === id)
            .reduce((object, item) => {
              return object + item;
            })
        });
      });
  };

  componentDidMount() {
    this.loadData();
  }

  componentWillUnmount() {
    this.loadData();
  }

  render() {
    const { setting, activeSlideIndex } = this.state;
    return (
      <Fragment>
        <Main settings>
          <div className="vectra flex align-center justify-around">
          {this.props.from === "ustawienia" ? <img src="/menu-icons/vectra.png" alt="Vectra Logo" /> : ""}
          </div>
          <div className="clock flex align-center justify-end"></div>
          <div className="background-left-top flex align-center justify-around"></div>
          <div className="nav-selected auto-height nav-selected-padding">
            <div className="element-container">
              <Text title>{this.props.from === "ustawienia" ? "ustawienia" : "pierwsza instalacja"}</Text>
              <div className="element-container">
                <div>
                  <Text>{this.props.from === "ustawienia" ? "... / aktualizacja oprogramowania" : `/ ${setting.name}`}</Text>
                  {setting.title ? (
                    <Text small white bold className="margin30-vertical">
                      {setting.title}
                    </Text>
                  ) : setting.vod ? (
                    <Text small green bold className="margin30-vertical">
                      {setting.vod}
                    </Text>
                  ) : (
                    ""
                  )}
                  <Text paragraph>{this.props.from === "ustawienia" ? "" : setting.description}</Text>
                </div>
                <Text list id="options-list">
                  {setting.choices.map(option => (
                    <div
                      className="flex align-center justify-between"
                      key={option.name}
                    >
                      {setting.choices.indexOf(option) ===
                      setting.choices.length - 1 ? (
                        <Link
                          to={this.props.from === "ustawienia" ? "/ustawienia/instalacja" :
                            activeSlideIndex === 7 ? `/` : `/puf/${
                            activeSlideIndex < 5 ?
                            activeSlideIndex + 1
                            : "6/szukanie"
                          }`}
                          onClick={this.loadData()}
                        >
                            {this.props.from === "ustawienia" ? "zamknij" : option.name}
                        </Link>
                      ) : (
                        <Text>{option.name}</Text>
                      )}
                      <Text small>
                        {option.chosen ? option.chosen : ""}
                      </Text>
                    </div>
                  ))}
                </Text>
              </div>
            </div>
          </div>
          <div className="background-right-top"></div>
        </Main>
        {activeSlideIndex > 1 && activeSlideIndex < 7 ? <Link
          to={this.props.from === "ustawienia" ? "/ustawienia/instalacja" : `/puf/${
            activeSlideIndex -1
          }`}
        >
          <Button />
        </Link> : ""}
      </Fragment>
    );
  }
}

export default PUF;
