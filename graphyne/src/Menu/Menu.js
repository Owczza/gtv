import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import "../App.css";
import { menu, Container } from "../Components/Components.js";

class Menu extends Component {
  state = {
    slides: [],
    activeSlideIndex: 1
  };

  centerSlide = index => {
    this.setState({
      activeSlideIndex:
        index >= 0 && index <= this.state.slides.length - 1
          ? index
          : this.state.activeSlideIndex
    });
  };

  componentDidMount() {
    fetch(`/Menu/${this.props.data}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          slides: data
        });
      });
  }

  render() {
    const { slides, activeSlideIndex } = this.state;
    const { photos } = this.props;
    return (
      <Fragment>
        <Container theme={menu}>
          <div className="vectra flex-center">
            <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
          </div>
          <div className="clock flex-center"></div>
          <div className="nav-left flex-end">
            <img
              className="margin30-sides margin10-top"
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
                src={`/${photos}/menu_${slides[activeSlideIndex]}.jpg`}
                alt={slides[activeSlideIndex]}
              />
            </Link>
          </div>
          <div className="nav-right flex-center">
            <img
              className="margin30-sides margin10-top"
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
                className="margin30-sides margin10-top"
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
        {this.props.data !== "slides" ? (
          <Link
            to={this.props.match.url.replace(`/${this.props.address.replace("/", "")}`, "")}
          >
            Powrót
          </Link>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default withRouter(Menu);
