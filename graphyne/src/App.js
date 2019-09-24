import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Navigation from "./Components/Navigation"
import Menu from "./Menu/Menu"
import MyFiles from "./MyFiles/MyFiles"
import Settings from "./Settings/Settings"
import Television from "./Television/Television"
import Program from "./Television/Program"

class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={ () => <Menu data="slides" photos="menu-icons" address=""/>} />
          <Route exact path="/portal" render={ () => <img src="/portal.jpg" />} />
          <Route exact path="/wiadomosci" render={ (props) => <MyFiles photos="" {...this.props} {...props} />} />
          <Route exact path="/telewizja" component={ () => <Television data="television" title="telewizja"/> } />
          <Route exact path="/telewizja/:channelNumber" render={ (props) => <Program data="television" {...this.props} {...props} /> } />
          <Route exact path="/radio" component={ () => <Television data="radio" title="RADIO"/> } />
          <Route exact path="/nagrania" component={ () => <Television data="recordings" title="nagrania"/> } />
          <Route exact path="/nagrania/:channelNumber" render={ (props) => <Program data="recordings" {...this.props} {...props} /> } />
          <Route exact path="/moje_pliki" render={ () => <Menu data="my-files"  photos="my-files-icons" address="moje_pliki/"/> } />
          <Route exact path="/moje_pliki/:type" render={ (props) => <MyFiles photos="my-files-icons/" {...this.props} {...props} />} />
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
