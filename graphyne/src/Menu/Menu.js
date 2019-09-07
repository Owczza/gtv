import React, {Component} from 'react';
import '../App.css';
import {menu, Container} from "../Components/Components.js"

class Menu extends Component {

  state = {
    slides: [],
    activeSlideIndex: 1,
  }

  displayActiveSlideIndex = () => {
    var image = `/menu-icons/menu_${this.state.slides[this.state.activeSlideIndex]}.jpg`;
    var navLeft = 
        this.state.activeSlideIndex > 0 ? `/menu-icons/${this.state.slides[this.state.activeSlideIndex-1]}.png` : "";
    var navRight1 = 
        this.state.activeSlideIndex + 1 < this.state.slides.length ? `/menu-icons/${this.state.slides[this.state.activeSlideIndex+1]}.png` : "";
    var navRight2 =
        this.state.activeSlideIndex + 2 < this.state.slides.length ? `/menu-icons/${this.state.slides[this.state.activeSlideIndex+2]}.png` : "";
    document.getElementById("center-nav-item").src=`${image}`;
    document.getElementById("left-nav-item").src=`${navLeft}`;
    document.getElementById("right-nav-item1").src=`${navRight1}`;
    document.getElementById("right-nav-item2").src=`${navRight2}`;
  }

  nextSlide = () => {
    if (this.state.activeSlideIndex+1 < this.state.slides.length) {
      this.setState({
        activeSlideIndex: this.state.activeSlideIndex+1
      });
    } 
    this.displayActiveSlideIndex();
}

  prevSlide = () => {
    if (this.state.activeSlideIndex > 0) {
      this.setState({
        activeSlideIndex: this.state.activeSlideIndex-1
      });
    } 
    this.displayActiveSlideIndex();
}

  componentDidMount() {
    fetch("/slides.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          slides: data
        });
      });

    document.addEventListener("keydown", event => {
      if (event.isComposing || event.keyCode === 37) {
        return;
      }
      this.nextSlide();
    });
  
    document.addEventListener("keydown", event => {
      if (event.isComposing || event.keyCode === 39) {
          return;
      }
      this.prevSlide();
    });
  }

  render() {
    return (
      <Container theme={menu}>
          <div className="vectra flex-center">
            <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
          </div>
          <div className="clock flex-center"></div>
          <div className="nav-left flex-end auto-height">
              <img
                id="left-nav-item"
                className="auto-height"
                src={`/menu-icons/${this.state.slides[this.state.activeSlideIndex-1]}.png`}
                alt={this.state.slides[this.state.activeSlideIndex-1]}
              />
          </div>
          <div className="nav-selected flex-center auto-height">
              <img
                id="center-nav-item"
                className="auto-height"
                src={`/menu-icons/menu_${this.state.slides[this.state.activeSlideIndex]}.jpg`}
                alt={this.state.slides[this.state.activeSlideIndex]}
              />
          </div>
          <div className="nav-right flex-center">
              <img
                id="right-nav-item1"
                className="auto-height"
                src={`/menu-icons/${this.state.slides[this.state.activeSlideIndex+1]}.png`}
                alt={this.state.slides[this.state.activeSlideIndex+1]}
              />
              <img
                id="right-nav-item2"
                className="auto-height"
                src={`/menu-icons/${this.state.slides[this.state.activeSlideIndex+2]}.png`}
                alt={this.state.slides[this.state.activeSlideIndex+2]}
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

export default Menu;