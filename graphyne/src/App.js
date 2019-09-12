import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Navigation from "./Components/Navigation"
import Menu from "./Menu/Menu"
import Settings from "./Settings/Settings"

class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={Menu} />
          <Route exact path="/settings" component={ () => <Settings subtitle="" data="Menu" /> } />
          <Route exact path="/settings/help" component={ () => <Settings subtitle="/ pomoc" data="Help" /> } />
        <Navigation />
      </div>
    );
  }
}

export default App;
