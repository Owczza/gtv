import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, settings } from "../Components/Components.js";

class Settings extends Component {
  state = {
    slides: [],
    activeSlideIndex: null
  };

  nextSlide = () => {
    if (this.state.activeSlideIndex + 1 < this.state.slides.length) {
      this.setState({
        activeSlideIndex: this.state.activeSlideIndex + 1
      });
    }
  };

  prevSlide = () => {
    if (this.state.activeSlideIndex > 0) {
      this.setState({
        activeSlideIndex: this.state.activeSlideIndex - 1
      });
    }
  };

  componentDidMount() {
    const type = this.props.data
      ? this.props.data
      : this.props.match.params.type;
    fetch(`/settingsMenu/settings_${type}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          slides: data,
          activeSlideIndex: data.length - 1,
          type
        });
      });

    document.addEventListener("keydown", event => {
      if (event.isComposing || event.key === "ArrowUp") {
        return;
      }
      this.nextSlide();
    });

    document.addEventListener("keydown", event => {
      if (event.isComposing || event.key === "ArrowDown") {
        return;
      }
      this.prevSlide();
    });
  }

  render() {
    const type = this.state.type;
    console.log(this.state, this.props);
    return (
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
              <h2 className="graphyne-font header2">
                {type === "Menu" ? "" : `/ ${type}`}
              </h2>
              <div className="graphyne-font font20">
                {this.state.slides.map(option => (
                  <div className="flex align-center justify-between">
                    <span
                      className={
                        this.state.slides.indexOf(option) ===
                        this.state.activeSlideIndex
                          ? "blue font21 font-weight800"
                          : ""
                      }
                      key={option.name}
                    >
                      {option.name}
                    </span>
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

export default Settings;
