import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Main, Container, Popup, Text, Title } from "../Components/Components.js";

class PUF extends Component {
  state = {
    list: []
  };

  pauseSearch = () => {
    this.clearTimer();
    document.getElementById("pause").style.display = "flex";
    document.getElementById("search").style.display = "none";
  };

  resumeSearch = () => {
    this.setTimer();
    document.getElementById("pause").style.display = "none";
    document.getElementById("search").style.display = "grid";
  };

  completeSearch = () => {
    document.getElementById("info").style.display = "flex";
    document.getElementById("search").style.display = "none";
  };

  loadData = () => {
    fetch(`/Menu/programSearch.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          list: data
        });
      });
  };

  componentDidMount() {
    this.loadData();
    this.setTimer();
  }

  componentWillUnmount() {
    clearTimeout(this.timerHandle);
    this.timerHandle = 0;
  }

  setTimer = () => {
    if (this.timerHandle) {
      return;
    }
    this.timerHandle = setTimeout(() => {
      this.completeSearch();
      this.timerHandle = 0;
    }, 3000);
  };

  clearTimer = () => {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  };

  render() {
    const { list } = this.state;

    return (
      <Fragment>
        <Popup blue id="info">
          <img src="/info.png" alt="info symbol" />
          <Text large center>
            Znaleziono kanały
            <br />
            <br />
            TV / 230 <br />
            Radio / 16 <br />
          </Text>
          {this.props.from === "puf" ? (
            <div className="flex align-center justify-around width600">
              <Link to="/puf/5">
                <Text list large bold>Powrót</Text>
              </Link>
              <Link to="/puf/7">
                <Text list large bold>Dalej</Text>
              </Link>
            </div>
          ) : (
            <div className="flex align-center justify-around width600">
              <Link to="/ustawienia/instalacja/wyszukiwanie kanałów">
                <Text list large bold>Zamknij</Text>
              </Link>
            </div>
          )}
        </Popup>
        <Popup green id="pause">
          <img src="/info.png" alt="info symbol" />
          <Text large center>
            Zatrzymanie wyszukiwania
            <br />
            <br />
            Czy potwierdzasz?
          </Text>
          <div className="flex align-center justify-around width600">
            <Link
              to={
                this.props.from === "puf"
                  ? "/puf/5"
                  : "/ustawienia/instalacja/wyszukiwanie kanałów"
              }
            >
              <Text list large bold>Tak</Text>
            </Link>
            <Link onClick={() => this.resumeSearch()}>
              <Text list large bold>Nie</Text>
            </Link>
          </div>
        </Popup>
        <Main settings id="search">
          <div className="vectra flex align-center justify-around"></div>
          <div className="clock flex align-center justify-end"></div>
          <div className="background-left-top flex align-center justify-around"></div>
          <div className="nav-selected auto-height nav-selected-padding">
            <div className="element-container">
              <Title noMargin>
                {this.props.from === "puf"
                  ? "pierwsza instalacja"
                  : "ustawienia"}
              </Title>
              <div className="element-container">
                <Text>
                  wyszukiwanie kanałów / automatyczne
                </Text>
                <div id="options-list">
                  {list.map(option => (
                    <div
                      className="flex align-center justify-between"
                      key={option.name}
                    >
                      <Text>{option.name}</Text>
                      <Text small>
                        {option.image ? (
                          <img src={option.image} alt="icon" />
                        ) : (
                          ""
                        )}{" "}
                        {option.chosen}
                      </Text>
                    </div>
                  ))}
                </div>
                <Text>
                  Trwa wyszukiwanie kanałów, proszę czekać...
                </Text>
                <div
                  className="graphyne-font font20 list-hover"
                  onClick={() => this.pauseSearch()}
                >
                  przerwij
                </div>
              </div>
            </div>
          </div>
          <div className="background-right-top"></div>
        </Main>
      </Fragment>
    );
  }
}

export default PUF;
