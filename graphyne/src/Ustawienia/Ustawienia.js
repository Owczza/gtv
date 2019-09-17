import React, {Component} from 'react';
import '../App.css';
import {settings, Container} from "../Components/Components.js"

class App extends Component {

  state = {
    slides: [],
    activeSlideIndex: 1,
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
    fetch("/settingsMenu.json")
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
      <Container theme={settings}>
        <div className="vectra flex-center">
            <img src="/menu-icons/vectra.png" />
        </div>      
        <div className="clock flex-center"></div>
        <div className="background-left-top flex-center"></div>
        <div className="nav-selected auto-height nav-selected-padding">
            <div className="element-container">
            <h1>ustawienia</h1>
            <div>
                <ul>
                {this.state.slides.map( option =>
                    <li className={option.isActive ? `active` : "" }>{option.name}</li>)}
                </ul>
            </div>
            </div>
        </div>
        <div className="background-right-top flex-center"></div>
      </Container>
    )
  }
}

export default App;