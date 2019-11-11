import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, television } from "../Components/Components.js";

class Recommended extends Component {
  state = {
    programs: [{}, {}, {}, {}, {}],
    activeSlideIndex: 0,
    input: "hello"
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
  }

  render() {
    return (
      <Fragment>
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
      <Link
          to={this.props.match.url.replace(`/szukaj`, "")}
        >
          Powrót
        </Link>
      </Fragment>
    );
  }
}

export default Recommended;
