import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Main, Container, Button, Text, MenuTitle, ProgramTitle } from "../Components/Components.js";

class Recommended extends Component {
  state = {
    programs: [{}, {}, {}, {}, {}],
    activeSlideIndex: 0
  };

  centerSlide = index => {
    this.setState({
      activeSlideIndex: index >= 0 && index <= this.state.programs.length -1 ? index : this.state.activeSlideIndex
    }) 
  };

  componentDidMount() {
    fetch(`/recommendedMenu/recommendedMenu.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          programs: data
        });
      });
  }

  render() {
    const { programs, activeSlideIndex } = this.state;
    return (
      <Fragment>
      <Main television>
        <div className="vectra flex-center filler">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="title graphyne-font drop-shadow-hard flex-start align-bottom">
          <div className="margin30-sides">
            <Text large bold>
              {programs[activeSlideIndex].channelNumber + "  "}
              {programs[activeSlideIndex].channelTitle}
            </Text>
            <ProgramTitle>
              {programs[activeSlideIndex].title}
            </ProgramTitle>
            <Text lowercase>
              {programs[activeSlideIndex].time} /{" "}
              {programs[activeSlideIndex].type}
              {programs[activeSlideIndex].PG
                ? ` / ${programs[activeSlideIndex].PG}`
                : ""}
              {programs[activeSlideIndex].rating
                ? ` / ⭐${programs[activeSlideIndex].rating}`
                : ""}
            </Text>
          </div>
        </div>
        <div className="clock flex-center filler"></div>
        <div className="background-left-top flex-end flex-column auto-height filler">
          <div className="half-height"> </div>
          <div className="half-height flex-center align-bottom">
            <img
              className="margin20-sides"
              src={
                activeSlideIndex > 0
                  ? programs[activeSlideIndex - 1].image
                  : "/recommended-logos/empty.png"
              }
              alt={programs[activeSlideIndex - 1]}
              onClick={() => this.centerSlide(activeSlideIndex - 1)}
            />
          </div>
        </div>
        <div className="nav-selected-top flex-end flex-column auto-height">
          <div className="flex-center align-bottom">
            <img
              className="margin20-sides"
              src="/recommended-logos/TVN_Turbo_HD_Logo.jpg"
              alt="TVN Turbo Logo"
            />
            <img
              className="margin20-sides"
              src="/recommended-logos/TVP_3_Logo.jpg"
              alt="TVP 3 Logo"
            />
          </div>
          <Text className="align-self-start margin30-sides">
            Najczęściej oglądane kanały
          </Text>
          <div className="flex-center align-bottom">
            <img
              className="margin20-sides active-channel margin7-bottom"
              src={programs[activeSlideIndex].image}
              alt={programs[activeSlideIndex]}
            />
            <img
              className="margin20-sides"
              src={
                activeSlideIndex + 1 < programs.length
                  ? programs[activeSlideIndex + 1].image
                  : "/recommended-logos/empty.png"
              }
              alt={programs[activeSlideIndex + 1]}
              onClick={() => this.centerSlide(activeSlideIndex + 1)}
            />
          </div>
        </div>
        <div className="background-right-top flex-center flex-column filler">
          <div className="half-height"> </div>
          <div className="half-height flex-center align-bottom">
            <img
              className="margin20-sides"
              src={
                activeSlideIndex + 2 < programs.length
                  ? programs[activeSlideIndex + 2].image
                  : "/recommended-logos/empty.png"
              }
              alt={programs[activeSlideIndex + 2]}
              onClick={() => this.centerSlide(activeSlideIndex + 2)}
            />
            <img
              className="margin20-sides"
              src={
                activeSlideIndex + 3 < programs.length
                  ? programs[activeSlideIndex + 3].image
                  : "/recommended-logos/empty.png"
              }
              alt={programs[activeSlideIndex + 3]}
              onClick={() => this.centerSlide(activeSlideIndex + 3)}
            />
          </div>
        </div>
        <div className="nav-left"></div>
        <div className="nav-selected">
          <MenuTitle bold className="graphyne-font margin30-sides">
            polecane
          </MenuTitle>
        </div>
        <div className="nav-right flex-center"></div>
        <div className="background-left-bottom align-top flex-end"></div>
        <div className="nav-selected-bottom"></div>
        <div className="background-right-bottom flex-center"></div>
      </Main>
      <Link to=""><Button /></Link>
    </Fragment>
    );
  }
}

export default Recommended;
