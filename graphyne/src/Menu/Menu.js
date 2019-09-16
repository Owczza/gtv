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
      activeSlideIndex: index
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
    fetch("/slides.json")
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
    return (
      <Container theme={menu}>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="clock flex-center"></div>
        <div className="nav-left flex-end auto-height">
          <img
            className="auto-height"
            src={
              this.state.activeSlideIndex > 0
                ? `/menu-icons/${
                    this.state.slides[this.state.activeSlideIndex - 1]
                  }.png`
                : ""
            }
            alt={this.state.slides[this.state.activeSlideIndex - 1]}
            onClick={() => this.centerSlide(this.state.activeSlideIndex - 1)}
          />
        </div>
        <div className="nav-selected flex-center auto-height">
          <Link to={`/${this.state.slides[this.state.activeSlideIndex]}`}>
            <img
              className="auto-height"
              src={`/menu-icons/menu_${
                this.state.slides[this.state.activeSlideIndex]
              }.jpg`}
              alt={this.state.slides[this.state.activeSlideIndex]}
            />
          </Link>
        </div> 
        <div className="nav-right flex-center">
          <img
            className="auto-height"
            src={
              this.state.activeSlideIndex + 1 < this.state.slides.length
                ? `/menu-icons/${
                    this.state.slides[this.state.activeSlideIndex + 1]
                  }.png`
                : ""
            }
            alt={this.state.slides[this.state.activeSlideIndex + 1]}
            onClick={() => this.centerSlide(this.state.activeSlideIndex + 1)}
          />
          <img
            className="auto-height"
            src={
              this.state.activeSlideIndex + 2 < this.state.slides.length
                ? `/menu-icons/${
                    this.state.slides[this.state.activeSlideIndex + 2]
                  }.png`
                : ""
            }
            alt={this.state.slides[this.state.activeSlideIndex + 2]}
            onClick={() => this.centerSlide(this.state.activeSlideIndex + 2)}
          />
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
