import React, {Component} from 'react';
import '../App.css';
import {settings, Container} from "../Components/Components.js"

class Settings extends Component {

  state = {
    slides: [],
    activeSlideIndex: null
  }

  nextSlide = () => {
    if (this.state.activeSlideIndex+1 < this.state.slides.length) {
      this.setState({
        activeSlideIndex: this.state.activeSlideIndex+1
      });
    } 
  }

  prevSlide = () => {
    if (this.state.activeSlideIndex > 0) {
      this.setState({
        activeSlideIndex: this.state.activeSlideIndex-1
      });
    } 
  }

  componentDidMount() {
    fetch(`/settingsMenu/settings${this.props.data}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          slides: data,
          activeSlideIndex: data.length - 1
        });
      });

    document.addEventListener("keydown", event => {
      if (event.isComposing || event.keyCode === 38) {
        return;
      }
      this.nextSlide();
    });
  
    document.addEventListener("keydown", event => {
      if (event.isComposing || event.keyCode === 40) {
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
            <div className="element-container">
                <h2>/{this.props.subtitle}</h2>
                <ul>
                    {this.state.slides.map( option =>
                      <li className=
                        {this.state.slides.indexOf(option) === this.state.activeSlideIndex ? `active` : ""}>
                     {option}</li>)}
                </ul>
            </div>
            </div>
        </div>
        <div className="background-right-top flex-center"></div>
      </Container>
    )
  }
}

export default Settings;