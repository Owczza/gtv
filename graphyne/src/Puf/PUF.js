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
      title: "",
      description: "",
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

  render() {
    const { setting, activeSlideIndex } = this.state;
    console.log(this.state.setting);
    return (
      <Container theme={settings}>
        <div className="vectra flex align-center justify-around"></div>
        <div className="clock flex align-center justify-end"></div>
        <div className="background-left-top flex align-center justify-around"></div>
        <div className="nav-selected auto-height nav-selected-padding">
          <div className="element-container">
            <h1 className="graphyne-font header1">pierwsza instalacja</h1>
            <div className="element-container">
              <h2 className="graphyne-font header2">{`/ ${setting.name}`}</h2>
                <h2 className="graphyne-font header2">{setting.title}</h2>
                <h2 className="graphyne-font header2 green weight800">{setting.description}</h2>
              <div className="graphyne-font font20" id="options-list">
                {setting.choices.map(option => (
                  <div
                    className="flex align-center justify-between"
                    key={option.name}
                  >
                    {setting.choices.indexOf(option) ===
                    setting.choices.length - 1 ? (
                      <Link to={ `/puf/${activeSlideIndex < 5 ? activeSlideIndex + 1 : "6/szukanie"}`}
                          onClick={this.loadData()}>
                        <span
                          className="graphyne-font list-hover"
                        >
                          {option.name}
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
    );
  }
}

export default PUF;
