import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, Button, Text } from "../Components/Components.js";

class Television extends Component {
  state = {
    programs: [{}, {}, {}, {}],
    list: [],
    options: [],
    activeSlideIndex: 1
  };

  centerSlide = index => {
    this.setState({
      activeSlideIndex: index
    });
  };

  componentDidMount() {
    fetch(`/${this.props.data}Menu/${this.props.data}Menu.json`)
      .then(response => response.json())
      .then(data => {
        console.log(this.props.data);
        this.setState({
          programs: data[0],
          list: data[1],
          options: data[2]
        });
      });
  }

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

  render() {
    const { programs, list, activeSlideIndex, options } = this.state;
    console.log(this.props.data);
    return (
      <Fragment>
        <Container television>
          <div className="vectra flex-center">
            <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
          </div>
          <div className="title flex-start">
            <Text title className="margin20-sides">{this.props.title}</Text>
          </div>
          <div className="clock flex-center"></div>
          <div className="background-left-top flex-center"></div>
          <div className="nav-selected-top flex-start align-bottom">
            <div className="margin20-sides">
              <Text extra>{programs[activeSlideIndex].channelNumber} </Text>
              <Text subtitle>{programs[activeSlideIndex].channelTitle}</Text>
              <Text program>{programs[activeSlideIndex].title}</Text>
              <Text>
                {programs[activeSlideIndex].time}
                {programs[activeSlideIndex].type}
                <br />
                {programs[activeSlideIndex].isRecorded
                  ? programs[activeSlideIndex].isRecorded
                  : ""}
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
                programs[
                  activeSlideIndex > 0
                    ? activeSlideIndex - 1
                    : programs.length - 1
                ].image
              }
              alt="program1"
              onClick={() =>
                this.centerSlide(
                  activeSlideIndex > 0
                    ? activeSlideIndex - 1
                    : programs.length - 1
                )
              }
            />
          </div>
          <div className="nav-selected flex-center auto-height">
            {this.props.data !== "radio" ? (
              <Link
                to={`${this.props.title}/${programs[activeSlideIndex].channelNumber}`}
              >
                <img
                  className="margin20-sides active-channel"
                  src={programs[activeSlideIndex].image}
                  alt="program2"
                />
              </Link>
            ) : (
              <img
                className="margin20-sides active-channel"
                src={programs[activeSlideIndex].image}
                alt="program2"
              />
            )}
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
              onClick={() =>
                this.centerSlide(
                  activeSlideIndex + 1 < programs.length
                    ? activeSlideIndex + 1
                    : 0
                )
              }
            />
            <img
              className="margin10-sides"
              src={
                programs[
                  activeSlideIndex + 2 < programs.length
                    ? activeSlideIndex + 2
                    : activeSlideIndex === programs.length - 1
                    ? 1
                    : 0
                ].image
              }
              alt="program4"
              onClick={() =>
                this.centerSlide(
                  activeSlideIndex + 2 < programs.length
                    ? activeSlideIndex + 2
                    : activeSlideIndex === programs.length - 1
                    ? 1
                    : 0
                )
              }
            />
          </div>
          <div className="background-left-bottom align-top flex-end">
            <Text paragraph right className="margin20-sides" id="opt">
              Wybierz{" "}
              <span className="opt" onClick={() => this.displayListOptions()}>
                OPT
              </span>{" "}
              na pilocie
              <br />
              aby przejść do opcji
            </Text>

            <Text list
              onClick={() => this.hideListOptions()}
              id="close"
            >
              Zamknij
            </Text>
          </div>
          <div className="nav-selected-bottom">
            <ul className="margin20-sides program-list-overflow flex-column">
              {list.map(type => (
                <Text list key={type}>
                  {type}
                </Text>
              ))}
            </ul>
          </div>
          <div className="background-right-bottom flex-center"></div>
        </Container>
        <Link to="">
          <Button />
        </Link>
      </Fragment>
    );
  }
}

export default Television;
