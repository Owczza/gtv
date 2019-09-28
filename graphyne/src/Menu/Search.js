import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, television } from "../Components/Components.js";

class Recommended extends Component {
  state = {
    programs: [{}, {}, {}, {}, {}],
    activeSlideIndex: 0,
    input: "hello"
  };

  nextSlide = event => {
    if (
      event.isComposing ||
      (event.key === "ArrowLeft" && !this.state.vertical)
    ) {
      return;
    }
    if (this.state.activeSlideIndex + 1 < this.state.programs.length) {
      this.setState({
        activeSlideIndex: this.state.activeSlideIndex + 1
      });
    }
  };

  prevSlide = event => {
    if (
      event.isComposing ||
      (event.key === "ArrowRight" && !this.state.vertical)
    ) {
      return;
    }
    if (this.state.activeSlideIndex > 0) {
      this.setState({
        activeSlideIndex: this.state.activeSlideIndex - 1
      });
    }
  };

  centerSlide = index => {
    this.setState({
      activeSlideIndex: index
    });
  };

  componentDidMount() {
    fetch(`/recommendedMenu/recommendedMenu.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          programs: data
        });
      });

    document.addEventListener("keydown", event => {
      this.nextSlide(event);
    });

    document.addEventListener("keydown", event => {
      this.prevSlide(event);
    });
  }

  componentWillUnmount() {
    const controller = new AbortController();
    controller.abort();

    document.removeEventListener("keydown", event => {
      this.nextSlide(event);
    });

    document.removeEventListener("keydown", event => {
      this.prevSlide(event);
    });
  }

  render() {
    return (
      <Container theme={television}>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="title graphyne-font flex-start align-bottom"></div>
        <div className="clock flex-center"></div>
        <div className="background-left-top flex-end auto-height"></div>
        <div className="nav-selected-top flex-end align-top flex-column auto-height">
            <div className="half-width text-align-right flex-column">
                <h2 className="graphyne-font font-weight800">Szukaj</h2>
                <h3 className="graphyne-font">Wszystkie typy</h3> <br />
                <p className="gray-text line-height25">Użyj strzałek oraz OK, aby wpisać słowo. Wciśnij klawisz GÓRA, aby je potwierdzić.</p> <br /><br />
                
            </div>
            <div className="graphyne-font twofifths-width flex-center gray-border-bottom">{this.state.input}</div>
        </div>
        <div className="background-right-top flex-center flex-column "></div>
        <div className="nav-left"></div>
        <div className="nav-selected"></div>
        <div className="nav-right flex-center"></div>
        <div className="background-left-bottom align-top flex-end"></div>
        <div className="nav-selected-bottom"></div>
        <div className="background-right-bottom flex-center"></div>
      </Container>
    );
  }
}

export default Recommended;
