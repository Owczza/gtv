import React, {Component} from 'react';
import Menu from "./Menu/Menu.js"
import Settings from "./Settings/Settings.js"

class App extends Component {

  render() {
    return (
      <Settings subtitle="pomoc" data="Help" />
    )
  }
}

export default App;
