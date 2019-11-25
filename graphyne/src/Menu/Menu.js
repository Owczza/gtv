import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import "../App.css";
import {
  Main,
  Container,
  Button,
  Header,
  Title
} from "../Components/Components.js";

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
    console.log(this.props)
    const { slides, activeSlideIndex } = this.state;
    return (
      <Fragment>
        <Main menu>
          <div className="vectra flex-center">
            <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
          </div>
          <div className="title"><Title>{this.props.match.url.replace("/", "")}</Title></div>
          <div className="clock flex-center"></div>
          <div className="nav-selected-top"></div>
          <div className="nav-left flex-end">
            <Header
              onClick={() => this.centerSlide(activeSlideIndex - 1)}
            >
              {activeSlideIndex > 0 ? slides[activeSlideIndex - 1] : ""}
            </Header>
          </div>
          <div className="nav-selected flex-center auto-height">
            <Header center>
              <Link to={`/${this.props.address}${slides[activeSlideIndex]}`}>
                {slides[activeSlideIndex]}
              </Link>
            </Header>
          </div>
          <div className="nav-right flex-center">
            <Header
              onClick={() => this.centerSlide(activeSlideIndex + 1)}
            >
              {activeSlideIndex + 1 < slides.length
                ? slides[activeSlideIndex + 1]
                : ""}
            </Header>
            {slides[activeSlideIndex] ? (
              <Header
                onClick={() => this.centerSlide(activeSlideIndex + 2)}
              >
                {activeSlideIndex + 2 < slides.length
                  ? slides[activeSlideIndex + 2]
                  : ""}
              </Header>
            ) : (
              <div className="half-width"></div>
            )}
          </div>
          <div className="background-left-top"></div>
          <div className="background-left-bottom"></div>
          <div className="nav-selected-bottom"></div>
          <div className="background-right-top"></div>
          <div className="background-right-bottom"></div>
        </Main>
        {this.props.data !== "slides" ? (
          <Link
            to={this.props.match.url.replace(
              `/${this.props.address.replace("/", "")}`,
              ""
            )}
          >
            <Button />
          </Link>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default withRouter(Menu);
