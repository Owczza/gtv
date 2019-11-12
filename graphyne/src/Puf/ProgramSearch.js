import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {
  Container,
  settings,
  Popup,
  green,
  blue
} from "../Components/Components.js";

class PUF extends Component {
  state = {
    list: []
  };

  pauseSearch = () => {
    this.clearTimer()
    document.getElementById("pause").style.display = "flex";
    document.getElementById("search").style.display = "none";
  };

  resumeSearch = () => {
    this.setTimer()
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
        <Popup theme={blue} className="graphyne-font" id="info">
          <img src="/info.png" alt="info symbol" />
          <p>
            Znaleziono kanały
            <br />
            <br />
            TV / 230 <br />
            Radio / 16 <br />
          </p>
          {this.props.from === "puf" ? <div className="flex align-center justify-around width600 font30">
            <Link to="/puf/5">
              <span className="list-hover">Powrót</span>
            </Link>
            <Link to="/puf/7">
              <span className="list-hover">Dalej</span>
            </Link>
          </div> :
          <div className="flex align-center justify-around width600 font30">
          <Link to="/ustawienia/instalacja/wyszukiwanie kanałów">
            <span className="list-hover">Zamknij</span>
          </Link>
        </div>}
        </Popup>
        <Popup theme={green} className="graphyne-font" id="pause">
          <img src="/info.png" alt="info symbol" />
          <p>
            Zatrzymanie wyszukiwania
            <br />
            <br />
            Czy potwierdzasz?
          </p>
          <div className="flex align-center justify-around width600 font30">
            <Link to={this.props.from === "puf" ? "/puf/5" : "/ustawienia/instalacja/wyszukiwanie kanałów"}>
              <span className="list-hover">Tak</span>
            </Link>
            <Link onClick={() => this.resumeSearch()}>
              <span className="list-hover">Nie</span>
            </Link>
          </div>
        </Popup>
        <Container theme={settings} id="search">
          <div className="vectra flex align-center justify-around"></div>
          <div className="clock flex align-center justify-end"></div>
          <div className="background-left-top flex align-center justify-around"></div>
          <div className="nav-selected auto-height nav-selected-padding">
            <div className="element-container">
              <h1 className="graphyne-font header1">{this.props.from === "puf" ? "pierwsza instalacja" : "ustawienia"}</h1>
              <div className="element-container">
                <h2 className="graphyne-font header2">
                  wyszukiwanie kanałów / automatyczne
                </h2>
                <div className="graphyne-font font20" id="options-list">
                  {list.map(option => (
                    <div
                      className="flex align-center justify-between"
                      key={option.name}
                    >
                      <span className="graphyne-font">{option.name}</span>
                      <span className="font16">
                        {option.image ? <img src={option.image} alt="icon"/> : ""}{" "}
                        {option.chosen}
                      </span>
                    </div>
                  ))}
                </div>
                <h2 className="graphyne-font header2">
                  Trwa wyszukiwanie kanałów, proszę czekać...
                </h2>
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
        </Container>
      </Fragment>
    );
  }
}

export default PUF;
