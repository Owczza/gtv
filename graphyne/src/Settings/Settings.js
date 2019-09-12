import React, { Component } from "react";
import "../App.css";
import { settings, Container } from "../Components/Components.js";

import dataActions from "../Redux/Actions/dataActions";
import { connect } from "react-redux";

class Settings extends Component {

    componentDidMount() {
    this.props.fetchSettingsData(this.props.data);
  }

  render() {
    this.props.nextSlide(this.props.activeSlideIndex, 40);
    this.props.prevSlide(this.props.activeSlideIndex, 38);
    const { slides, activeSlideIndex } = this.props;
    return (
      <Container theme={settings}>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" />
        </div>
        <div className="clock flex-center"></div>
        <div className="background-left-top flex-center"></div>
        <div className="nav-selected auto-height nav-selected-padding">
          <div className="element-container">
            <h1 className="graphyne-font header1">ustawienia</h1>
            <div className="element-container">
              <h2 className="graphyne-font header2">{this.props.subtitle}</h2>
              <ul>
                {slides.map(option => (
                  <li
                    className={
                      slides.indexOf(option) === activeSlideIndex
                        ? "graphyne-font " + "active"
                        : "graphyne-font"
                    }
                  >
                    {option}
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

const mapStateToProps = state => ({
  slides: state.data.slides,
  slidesLength: state.data.slidesLength,
  activeSlideIndex: state.data.activeSlideIndex
});

const mapDispatchToProps = dataActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
