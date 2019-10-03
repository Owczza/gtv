import React, { Component } from "react";
import "../App.css";
import { Container, settings } from "../Components/Components.js";

class Settings extends Component {
  state = {
    data: [],
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
    const type = this.props.match.params.type
    const subtype = this.props.match.params.subtype.substr(1)
    fetch(`/settingsMenu/${type}/${subtype}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data,
          activeSlideIndex: data.length - 1,
          subtype
        });
      })
      ;

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
    const { subtype, data } = this.state
    
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
              <h2 className="graphyne-font header2">.../ {subtype}</h2>
              <ul>
                {data.map(option => (
                  <li
                    className={
                      data.indexOf(option) ===
                      this.state.activeSlideIndex
                        ? "graphyne-font blue program-channel-number"
                        : "graphyne-font"
                    }
                    key={option}
                  ><span>{option.name}</span><span>{option.chosen}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="background-right-top flex-center"></div>
      </Container>
    );
  }
}

export default Settings;