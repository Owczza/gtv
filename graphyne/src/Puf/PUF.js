import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, Button } from "../Components/Components.js";

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
        <Container settings>
          <div className="vectra flex align-center justify-around">
          {this.props.from === "ustawienia" ? <img src="/menu-icons/vectra.png" alt="Vectra Logo" /> : ""}
          </div>
          <div className="clock flex align-center justify-end"></div>
          <div className="background-left-top flex align-center justify-around"></div>
          <div className="nav-selected auto-height nav-selected-padding">
            <div className="element-container">
              <h1 className="graphyne-font header1">{this.props.from === "ustawienia" ? "ustawienia" : "pierwsza instalacja"}</h1>
              <div className="element-container">
                <div>
                  <h2 className="graphyne-font header2">{this.props.from === "ustawienia" ? "... / aktualizacja oprogramowania" : `/ ${setting.name}`}</h2>
                  {setting.title ? (
                    <h2 className="graphyne-font header2 font-weight800 margin30-vertical white-text">
                      {setting.title}
                    </h2>
                  ) : setting.vod ? (
                    <h2 className="graphyne-font header2 font-weight800 green-text margin30-vertical">
                      {setting.vod}
                    </h2>
                  ) : (
                    ""
                  )}
                  <p className="gray-text font16">{this.props.from === "ustawienia" ? "" : setting.description}</p>
                </div>
                <div className="graphyne-font font20" id="options-list">
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
                          <span className="graphyne-font list-hover">
                            {this.props.from === "ustawienia" ? "zamknij" : option.name}
                          </span>
                        </Link>
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
