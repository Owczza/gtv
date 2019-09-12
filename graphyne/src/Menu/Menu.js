import React, {Component} from 'react';
import '../App.css';
import {menu, Container} from "../Components/Components.js"

import dataActions from "../Redux/Actions/dataActions";
import { connect } from "react-redux";

class Menu extends Component {

  componentDidMount() {
    this.props.fetchData("slides");
  }

  render() {
    const { slides, slidesLength, activeSlideIndex } = this.props;
    this.props.nextSlide(this.props.activeSlideIndex, "ArrowRight");
    this.props.prevSlide(this.props.activeSlideIndex, "ArrowLeft");
    return (
      <Container theme={menu} onKeyPress={jsruh}>
          <div className="vectra flex-center">
            <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
          </div>
          <div className="clock flex-center"></div>
          <div className="nav-left flex-end auto-height">
              <img
                id="left-nav-item"
                className="auto-height"
                src={activeSlideIndex > 0 ? `/menu-icons/${slides[activeSlideIndex-1]}.png` : ""}
                alt={slides[activeSlideIndex-1]}
              />
          </div>
          <div className="nav-selected flex-center auto-height">
              <img
                id="center-nav-item"
                className="auto-height"
                src={`/menu-icons/menu_${slides[activeSlideIndex]}.jpg`}
                alt={slides[activeSlideIndex]}
              />
          </div>
          <div className="nav-right flex-center">
              <img
                id="right-nav-item1"
                className="auto-height"
                src={activeSlideIndex + 1 < slidesLength ? `/menu-icons/${slides[activeSlideIndex+1]}.png` : ""}
                alt={slides[activeSlideIndex+1]}
              />
              <img
                id="right-nav-item2"
                className="auto-height"
                src={activeSlideIndex + 2 < slidesLength ? `/menu-icons/${slides[activeSlideIndex+2]}.png` : ""}
                alt={slides[activeSlideIndex+2]}
              />
          </div>
          <div className="background-left-top flex-center"></div>
          <div className="background-left-bottom flex-center"></div>
          <div className="background-right-top flex-center"></div>
          <div className="background-right-bottom flex-center"></div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  slides: state.data.slides,
  slidesLength: state.data.slidesLength,
  activeSlideIndex: state.data.activeSlideIndex
});

const mapDispatchToProps = dataActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);