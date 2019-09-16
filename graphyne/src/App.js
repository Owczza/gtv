import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Navigation from "./Components/Navigation"
import Menu from "./Menu/Menu"
import Settings from "./Settings/Settings"
import Television from "./Television/Television"
import Program from "./Television/Program"

class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={Menu} />
          <Route exact path="/telewizja" component={ () => <Television data="Menu" /> } />
          <Route exact path="/telewizja/136" component={ () => <Program data="Program"/> } />
          <Route exact path="/ustawienia" component={ () => <Settings subtitle="" data="Menu" /> } />
          <Route exact path="/ustawienia/pomoc" component={ () => <Settings subtitle="/ pomoc" data="Help" /> } />
          <Route exact path="/ustawienia/diagnostyka" component={ () => <Settings subtitle="/ diagnostyka" data="Diagnostic" /> } />
          <Route exact path="/ustawienia/instalacja" component={ () => <Settings subtitle="/ instalacja" data="Instalation" /> } />
          <Route exact path="/ustawienia/multiroom" component={ () => <Settings subtitle="/ multiroom" data="Multiroom" /> } />
          <Route exact path="/ustawienia/preferencje" component={ () => <Settings subtitle="/ preferencje" data="Prefferences" /> } />
          <Route exact path="/ustawienia/ochrona rodzicielska" component={ () => <Settings subtitle="/ ochrona rodzicielska" data="Protection" /> } />
        <Navigation />
      </div>
    );
  }
}

export default App;
