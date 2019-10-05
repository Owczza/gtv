import React, { Component } from "react";
import "../App.css";
import { Container, settings } from "../Components/Components.js";

class SettingsNested extends Component {
  state = {
    data: { nested: [], choices: [] },
    activeSlideIndex: null,
    choosing: null
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

  pickChoice = choice => {
    this.setState({
      ...this.state,
      data: {...this.state.data, chosen: choice},
      choosing: false,
      activeSlideIndex: true
    });
  };

  startChoosing = () => {
    this.setState({
      ...this.state,
      choosing: true,
      activeSlideIndex: false
    });
  };

  uploadToState = () => {
    const choosing = this.props.location.option.nested ? 0 : false;
    const activeSlideIndex = this.props.location.option.nested
      ? this.props.location.option.nested.length - 1
      : true;
    this.setState({
      data: this.props.location.option,
      activeSlideIndex,
      choosing
    });
  };

  componentDidMount() {
    this.uploadToState();
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
    const data = this.state.data;
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
                {this.props.location.option.nested ? (
                  data.nested.map(option => (
                    <div
                      className="flex align-center justify-between"
                      key={option.name}
                    >
                      <span
                        className={
                          data.nested.indexOf(option) ===
                          this.state.activeSlideIndex
                            ? "blue font21 font-weight800"
                            : ""
                        }
                      >
                        {option.name}
                      </span>
                      <span className="font16">
                        {option.chosen ? option.chosen : ""}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="flex align-bottom justify-between">
                    <span
                      className={
                        this.state.activeSlideIndex
                          ? "blue font21 font-weight800"
                          : ""
                      }
                    >
                      {data.name}
                    </span>

                    {this.state.choosing === false ? (
                      <span
                        className="font16"
                        onClick={() => this.startChoosing()}
                      >
                        {data.chosen}
                      </span>
                    ) : (
                      <div className="flex-column flex">{data.choices.map(choice => (
                        <span
                          className={
                            this.state.data.chosen === choice
                              ? "blue font16 font-weight800"
                              : "font16"
                          }
                          onClick={() => this.pickChoice(choice)}
                        >
                          {choice}
                        </span>
                      ))}</div>
                    )}
                  </div>
                )}
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