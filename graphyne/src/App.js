import React, {Component} from 'react';
import './App.css';
import {menu, settings, Container} from "./Components/Components.js"
import vectraLogo from "./menu-icons/vectra.png"

class App extends Component {

  state = {
    slides: {},
  }

  render() {
    return (
      <Container theme={menu}>
          <div class="vectra flex-center">
            <img src={vectraLogo} />
          </div>
          <div class="clock flex-center"></div>
          <div class="nav-left flex-end auto-height">
              <img id="left-nav-item" class="auto-height" src="" />
          </div>
          <div class="nav-selected flex-center auto-height">
              <img id="focus-nav-item" class="auto-height" src="" />
          </div>
          <div class="nav-right flex-center">
              <img id="right-nav-item1" class="auto-height" src="" />
              <img id="right-nav-item2" class="auto-height" src="" />
          </div>
          <div class="background-left-top flex-center"></div>
          <div class="background-left-bottom flex-center"></div>
          <div class="background-right-top flex-center"></div>
          <div class="background-right-bottom flex-center"></div>
      </Container>
    )
  }
}

export default App;
