import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, settings } from "../Components/Components.js";

class PUF extends Component {
  state = {
    list: []
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
  }

  render() {
    const { list } = this.state;
    console.log(this.state.setting);
    return (
      <Container theme={settings}>
          <div className="overlay-background align-center justify-around">
              <div className="blue-box">
                  <span className="graphyne-font font20">
                      Znaleziono kanały
                      TV / 230 <br />
                      Radio / 16 <br />
                      <Link to="/puf/5">Powrót</Link>
                      Radio / 16 <br />
                      <Link to="/puf/7">Dalej</Link>
                  </span>
              </div>
          </div>
          <div className="overlay-background align-center justify-around">
              <div className="blue-box">
                  <span className="graphyne-font font20">
                      Zatrzymanie wyszukiwania
                      Czy potwierdzasz? <br />
                      <Link to="/puf/5">Tak</Link>
                      Radio / 16 <br />
                      <Link to="/puf/6/szukanie">Nie</Link>
                  </span>
              </div>
          </div>
        <div className="vectra flex align-center justify-around"></div>
        <div className="clock flex align-center justify-end"></div>
        <div className="background-left-top flex align-center justify-around"></div>
        <div className="nav-selected auto-height nav-selected-padding">
          <div className="element-container">
            <h1 className="graphyne-font header1">pierwsza instalacja</h1>
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
                      {option.image ? <img src={option.image} /> : ""}{" "}
                      {option.chosen}
                    </span>
                  </div>
                ))}
              </div>              
              <h2 className="graphyne-font header2">Trwa wyszukiwanie kanałów, proszę czekać...</h2>
              {/* <Link
                to="puf/7"
              >
                <div className="graphyne-font font20 list-hover">przerwij</div>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="background-right-top"></div>
      </Container>
    );
  }
}

export default PUF;
