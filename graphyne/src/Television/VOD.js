import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {
  Main,
  Container,
  Button,
  Text,
  Title,
  ProgramTitle,
  Info
} from "../Components/Components.js";

class VOD extends Component {
  state = {
    programs: [{}, {}, {}, {}, {}],
    list: [],
    options: [],
    activeSlideIndex: 1,
    activeListIndex: null,
    vertical: false
  };

  centerSlide = index => {
    this.setState({
      activeSlideIndex:
        index >= 0 && index <= this.state.programs.length - 1
          ? index
          : this.state.activeSlideIndex
    });
  };

  displayListOptions = () => {
    document.getElementById("list-options").style.display = "flex";
    document.getElementById("left-program").style.display = "none";
    document.getElementById("opt").style.display = "none";
    document.getElementById("close").style.display = "block";
  };

  hideListOptions = () => {
    document.getElementById("list-options").style.display = "none";
    document.getElementById("left-program").style.display = "block";
    document.getElementById("opt").style.display = "block";
    document.getElementById("close").style.display = "none";
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
  }

  render() {
    const { programs, list, activeSlideIndex, options } = this.state;
    return (
      <Fragment>
        <Main television>
          <div className="vectra flex-center">
            <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
          </div>
          <div className="title flex-start">
            <Title>VOD</Title>
          </div>
          <div className="clock flex-center"></div>
          <div className="background-left-top flex-center"></div>
          <div className="nav-selected-top flex-start align-bottom">
            <div className="margin20-sides">
              <Text large bold>
                {programs[activeSlideIndex].channelNumber}
              </Text>
              <ProgramTitle>{programs[activeSlideIndex].title}</ProgramTitle>
              <Text lowercase>
                {programs[activeSlideIndex].type +
                  " / " +
                  programs[activeSlideIndex].country +
                  " / " +
                  programs[activeSlideIndex].year +
                  " / " +
                  programs[activeSlideIndex].PG}
                <br />
                Cena:{" "}
                {programs[activeSlideIndex].price +
                  " / " +
                  programs[activeSlideIndex].duration}
              </Text>
            </div>
          </div>
          <div className="background-right-top flex-center"></div>
          <div className="nav-left flex-end auto-height">
            <div id="list-options" className="flex-column">
              {options.map(element => (
                <Text list>{element}</Text>
              ))}
              <br />
            </div>
            <img
              className="margin10-sides"
              id="left-program"
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
            <Info
              right
              className="margin20-sides"
              id="opt"
              onClick={() => this.displayListOptions()}
            >
              Wybierz <span className="opt">OPT</span> na pilocie
              <br />
              aby przejść do opcji
            </Info>

            <Text list onClick={() => this.hideListOptions()} id="close">
              Zamknij
            </Text>
          </div>
          <div className="nav-selected-bottom">
            <ul className="margin20-sides program-list-overflow">
              {list.map(type => (
                <Text list key={type}>
                  {type}
                </Text>
              ))}
            </ul>
          </div>
          <div className="background-right-bottom flex-center"></div>
        </Main>
        <Link to="">
          <Button />
        </Link>
      </Fragment>
    );
  }
}

export default VOD;
