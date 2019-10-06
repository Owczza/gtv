import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, television } from "../Components/Components.js";

class VOD extends Component {
  state = {
    programs: [{}, {}, {}, {}, {}],
    list: [],
    options: [],
    activeSlideIndex: 1,
    activeListIndex: null,
    vertical: false
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

  goUp = event => {
    if (
      event.isComposing ||
      (event.key === "ArrowDown" && this.state.vertical)
    ) {
      return;
    }
    if (this.state.activeListIndex > 0) {
      this.setState({
        activeListIndex: this.state.activeListIndex - 1
      });
    } else {
      this.setState({
        activeListIndex: this.state.list.length - 1
      });
    }
  };

  goDown = event => {
    if (event.isComposing || event.key === "ArrowUp") {
      this.setState({
        vertical: true
      });
    }
    if (this.state.activeListIndex === null) {
      this.setState({
        activeListIndex: 0
      });
    }
    if (this.state.activeListIndex + 1 < this.state.list.length) {
      this.setState({
        activeListIndex: this.state.activeListIndex + 1
      });
    } else {
      this.setState({
        activeListIndex: 0
      });
    }
  };

  centerSlide = index => {
    
    this.setState({
      activeSlideIndex: index >= 0 && index <= this.state.programs.length -1 ? index : this.state.activeSlideIndex
    }) 
  };

  componentDidMount() {
    fetch(`/vodMenu/vodMenu.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          programs: data[0],
          list: data[1],
          options: data[2]
        });
      });

    document.addEventListener("keydown", event => {
      this.nextSlide(event);
    });

    document.addEventListener("keydown", event => {
      this.prevSlide(event);
    });

    document.addEventListener("keydown", event => {
      this.goDown(event);
    });

    document.removeEventListener("keydown", event => {
      this.goUp(event);
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

    document.removeEventListener("keydown", event => {
      this.goDown(event);
    });

    document.removeEventListener("keydown", event => {
      this.goUp(event);
    });
  }

  render() {
    console.log(this.state.programs);
    const { programs, list, activeSlideIndex, activeListIndex } = this.state;
    return (
      <Container theme={television}>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="title graphyne-font header1 flex-start">
          <span className="margin20-sides">VOD</span>
        </div>
        <div className="clock flex-center"></div>
        <div className="background-left-top flex-center"></div>
        <div className="nav-selected-top flex-start align-bottom">
          <div className="margin20-sides">
            <h1 className="graphyne-font program-channel-number">
              {programs[activeSlideIndex].channelNumber}
            </h1>
            <h2 className="program-title blue">
              {programs[activeSlideIndex].title}
            </h2>
            <h3 className="program-time-and-type">
              {programs[activeSlideIndex].time} /
              {programs[activeSlideIndex].country} /
              {programs[activeSlideIndex].time} /{programs[activeSlideIndex].PG}
              <br />
              Cena: {programs[activeSlideIndex].price} /
              {programs[activeSlideIndex].duration}
            </h3>
          </div>
        </div>
        <div className="background-right-top flex-center"></div>
        <div className="nav-left flex-end auto-height">
          <img
            className="margin10-sides"
            src={
              activeSlideIndex > 0
                ? programs[activeSlideIndex - 1].image
                : "/vod-images/empty.png"
            }
            alt={programs[activeSlideIndex - 1]}
            onClick={() => this.centerSlide(activeSlideIndex - 1)}
          />
        </div>
        <div className="nav-selected flex-center auto-height">
          <Link to={`vod/${programs[activeSlideIndex].channelNumber}`}>
            <img
              className="margin20-sides active-channel"
              src={programs[activeSlideIndex].image}
              alt={programs[activeSlideIndex]}
            />
          </Link>
          <img
            className="margin20-sides"
            src={
              activeSlideIndex + 1 < programs.length
                ? programs[activeSlideIndex + 1].image
                : "/vod-images/empty.png"
            }
            alt={programs[activeSlideIndex + 1]}
            onClick={() => this.centerSlide(activeSlideIndex + 1)}
          />
        </div>
        <div className="nav-right flex-center">
          <img
            className="margin10-sides"
            src={
              activeSlideIndex + 2 < programs.length
                ? programs[activeSlideIndex + 2].image
                : "/vod-images/empty.png"
            }
            alt={programs[activeSlideIndex + 2]}
            onClick={() => this.centerSlide(activeSlideIndex + 2)}
          />
          <img
            className="margin10-sides"
            src={
              activeSlideIndex + 3 < programs.length
                ? programs[activeSlideIndex + 3].image
                : "/vod-images/empty.png"
            }
            alt={programs[activeSlideIndex + 3]}
            onClick={() => this.centerSlide(activeSlideIndex + 3)}
          />
        </div>
        <div className="background-left-bottom align-top flex-end">
          <div className="gray-text text-align-right margin20-sides">
            Wybierz <span className="opt">OPT</span> na pilocie
            <br />
            aby przejść do opcji
          </div>
        </div>
        <div className="nav-selected-bottom">
          <ul className="margin20-sides">
            {list.map(type => (
              <li
                className={
                  type === list[activeListIndex]
                    ? "graphyne-font program-channel-number blue"
                    : "graphyne-font"
                }
                key={type}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
        <div className="background-right-bottom flex-center"></div>
      </Container>
    );
  }
}

export default VOD;
