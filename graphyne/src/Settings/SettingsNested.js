import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, settings } from "../Components/Components.js";

class SettingsNested extends Component {
  state = {
    data: { nested: [], choices: [] },
    activeSlideIndex: null,
    choosing: null,
    url: ""
  };

  pickChoice = choice => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, chosen: choice },
      choosing: false,
      activeSlideIndex: true
    });
  };

  startChoosing = () => {
    this.setState({
      ...this.state,
      choosing: true,
      activeSlideIndex: false
    });
  };

  uploadToState = () => {
    const choosing = this.props.location.option.nested ? 0 : false;
    const activeSlideIndex = this.props.location.option.nested
      ? this.props.location.option.nested.length - 1
      : true;
    const pathname = this.props.match.url ? this.props.match.url : "";
    this.setState({
      data: this.props.location.option,
      activeSlideIndex,
      choosing,
      url: pathname
    });
  };

  componentDidMount() {
    this.uploadToState();
  }

  render() {
    const data = this.state.data;
    console.log(data);
    return (
      <Container theme={settings}>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="clock flex-center"></div>
        <div className="background-left-top flex-center"></div>
        <div className="nav-selected auto-height nav-selected-padding">
          <div className="element-container">
            <h1 className="graphyne-font header1">ustawienia</h1>
            <div className="element-container">
              <h2 className="graphyne-font header2">.../ {data.name}</h2>
              <div className="graphyne-font font20">
                {this.props.location.option.nested ? (
                  data.nested.map(option => (
                    <div
                      className="flex align-center justify-between"
                      key={option.name}
                    >
                      <span className="list-hover">
                        {option.nested ? 
                        <Link
                          to={{
                            pathname: this.state.url + "/" + option.name,
                            option
                          }}
                        >
                          {option.name}
                        </Link> :
                      option.name}
                      </span>
                      <span className="font16">
                        {option.chosen ? option.chosen : ""}
                      </span>
                    </div>
                  ))
                ) : (
                  <Fragment>
                    <div className="flex align-bottom justify-between">
                      <span className="blue font-weight800 font21">
                        {data.name}
                      </span>
                      <br />
                      {this.state.choosing === false ? (
                        <span
                          className="font16"
                          onClick={() => this.startChoosing()}
                        >
                          {data.chosen}
                        </span>
                      ) : (
                        <div className="flex-column flex">
                          {data.choices.map(choice => (
                            <span
                              className="list-hover"
                              onClick={() => this.pickChoice(choice)}
                              key={choice}
                            >
                              {choice}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="background-right-top flex-center"></div>
      </Container>
    );
  }
}

export default SettingsNested;
