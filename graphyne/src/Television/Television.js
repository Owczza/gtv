import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, television } from "../Components/Components.js";

class Television extends Component {
  state = {
    programs: [{}, {}, {}, {}],
    list: [],
    options: [],
    activeSlideIndex: 1,
    activeListIndex: null,
    vertical: false
  };

  nextSlide = () => {
    if (this.state.activeSlideIndex + 1 < this.state.programs.length) {
      this.setState({
        activeSlideIndex: this.state.activeSlideIndex + 1
      });
    } else {
      this.setState({
        activeSlideIndex: 0
      });
    }
  };

  goUp = () => {
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

  goDown = () => {
    
    if (this.state.activeListIndex + 1 < this.state.list.length) {
      this.setState({
        activeListIndex: this.state.activeListIndex + 1
      });
      console.log(this.state.activeListIndex)
    } else {
      this.setState({
        activeListIndex: 0
      });
      console.log(this.state.activeListIndex)
    }
  };

  prevSlide = () => {
    if (this.state.activeSlideIndex > 0) {
      this.setState({
        activeSlideIndex: this.state.activeSlideIndex - 1
      });
    } else {
      this.setState({
        activeSlideIndex: this.state.programs.length - 1
      });
    }
  };

  componentDidMount() {
    fetch(`/televisionMenu/television${this.props.data}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          programs: data[0],
          list: data[1],
          options: data[2]
        });
      });

    document.addEventListener("keydown", event => {
      if (event.isComposing || (event.keyCode === 37 && !this.state.vertical)) {
        return;
      }
      this.nextSlide();
    });

    document.addEventListener("keydown", event => {
      if (event.isComposing || (event.keyCode === 39 && !this.state.vertical)) {
        return;
      }
      this.prevSlide();
    });

    document.addEventListener("keydown", event => {
      if (event.isComposing || event.keyCode === 38) {
        this.setState({
          vertical: true
        });
      }
      if (this.state.activeListIndex === null) {
        this.setState({
          activeListIndex: 0
        });}
        console.log("fuck")
        console.log(this.state.activeListIndex)
      this.goDown();
    });

    document.addEventListener("keydown", event => {
      if (event.isComposing || (event.keyCode === 40 && this.state.vertical)) {
        return;
      }
      this.goUp();
    });
  }

  render() {
    const { programs, list, activeSlideIndex, activeListIndex } = this.state;
    return (
      <Container theme={television}>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="title graphyne-font header1 flex-start">
          <span className="margin20-sides">TELEWIZJA</span>
        </div>
        <div className="clock flex-center"></div>
        <div className="background-left-top flex-center"></div>
        <div className="nav-selected-top flex-start align-bottom">
          <div className="margin20-sides">
            <h1 className="graphyne-font program-channel-number">
              {programs[activeSlideIndex].channelNumber}{" "}
              <span className="program-channel-title blue">
                {programs[activeSlideIndex].channelTitle}
              </span>
            </h1>
            <h2 className="program-title blue">
              {programs[activeSlideIndex].title}
            </h2>
            <h3 className="program-time-and-type">
              {programs[activeSlideIndex].time} /{" "}
              {programs[activeSlideIndex].type}
            </h3>
          </div>
        </div>
        <div className="background-right-top flex-center"></div>
        <div className="nav-left flex-end auto-height">
          <img
            className="margin10-sides"
            src={
              programs[
                activeSlideIndex > 0
                  ? activeSlideIndex - 1
                  : programs.length - 1
              ].image
            }
            alt="program1"
          />
        </div>
        <div className="nav-selected flex-center auto-height">
          <Link to={`telewizja/${programs[activeSlideIndex].channelNumber}`}>
            <img
              className="margin20-sides active-channel"
              src={programs[activeSlideIndex].image}
              alt="program2"
            />
          </Link>
        </div>
        <div className="nav-right flex-center padding455-left">
          <img
            className="margin10-sides"
            src={
              programs[
                activeSlideIndex + 1 < programs.length
                  ? activeSlideIndex + 1
                  : 0
              ].image
            }
            alt="program3"
          />
          <img
            className="margin10-sides"
            src={
              programs[
                activeSlideIndex + 2 < programs.length
                  ? activeSlideIndex + 2
                  : 0
              ].image
            }
            alt="program4"
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

export default Television;
