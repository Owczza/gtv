import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../App.css";
import { menu, Container } from "../Components/Components.js";

class Menu extends Component {
  state = {
    slides: [],
    activeSlideIndex: 1
  };

  nextSlide = () => {
    if (this.state.activeSlideIndex + 1 < this.state.slides.length) {
      this.setState({
        activeSlideIndex: this.state.activeSlideIndex + 1
      });
    }
  };

  centerSlide = index => {
    this.setState({
      activeSlideIndex: index >= 0 && index <= this.state.slides.length -1 ? index : this.state.activeSlideIndex
    });
  };

  prevSlide = () => {
    if (this.state.activeSlideIndex > 0) {
      this.setState({
        activeSlideIndex: this.state.activeSlideIndex - 1
      });
    }
  };

  componentDidMount() {
    
    fetch(`/Menu/${this.props.data}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          slides: data
        });
      });

    document.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft") {
        return;
      }
      this.nextSlide();
    });

    document.addEventListener("keydown", event => {
      if (event.key === "ArrowRight") {
        return;
      }
      this.prevSlide();
    });
    
  }

  render() {
    const { slides, activeSlideIndex } = this.state;
    const { photos } = this.props;
    return (
      <Container theme={menu}>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="clock flex-center"></div>
        <div className="nav-left flex-end">
          <img
            src={
              activeSlideIndex > 0
                ? `/${photos}/${slides[activeSlideIndex - 1]}.png`
                : ""
            }
            alt={slides[activeSlideIndex - 1]}
            onClick={() => this.centerSlide(activeSlideIndex - 1)}
          />
        </div>
        <div className="nav-selected flex-center auto-height">
          <Link to={`/${this.props.address}${slides[activeSlideIndex]}`}>
            <img
              className="auto-height"
              src={`/${photos}/menu_${slides[activeSlideIndex]}.jpg`}
              alt={slides[activeSlideIndex]}
            />
          </Link>
        </div>
        <div className="nav-right flex-center">
          <img
            className="auto-height"
            src={
              activeSlideIndex + 1 < slides.length
                ? `/${photos}/${slides[activeSlideIndex + 1]}.png`
                : ""
            }
            alt={slides[activeSlideIndex + 1]}
            onClick={() => this.centerSlide(activeSlideIndex + 1)}
          />
          {slides[activeSlideIndex] ? (
            <img
              className="auto-height"
              src={
                activeSlideIndex + 2 < slides.length
                  ? `/${photos}/${slides[activeSlideIndex + 2]}.png`
                  : ""
              }
              alt={slides[activeSlideIndex + 2]}
              onClick={() => this.centerSlide(activeSlideIndex + 2)}
            />
          ) : (
            <div className="half-width"></div>
          )}
        </div>
        <div className="background-left-top flex-center"></div>
        <div className="background-left-bottom flex-center"></div>
        <div className="background-right-top flex-center"></div>
        <div className="background-right-bottom flex-center"></div>
      </Container>
    );
  }
}

export default withRouter(Menu);
