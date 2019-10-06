import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Navigation from "./Components/Navigation"
import Menu from "./Menu/Menu"
import MyFiles from "./Menu/MyFiles"
import Search from "./Menu/Search"
import Settings from "./Settings/Settings"
import SettingsNested from "./Settings/SettingsNested"
import Television from "./Television/Television"
import VOD from "./Television/VOD"
import Program from "./Television/Program"
import Recommended from "./Television/Recommended"

class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={ () => <Menu data="slides" photos="menu-icons" address=""/>} />
          <Route exact path="/polecane" component={ () => <Recommended />} />
          <Route exact path="/telewizja" component={ () => <Television data="television" title="telewizja"/> } />
          <Route exact path="/telewizja/:channelNumber" render={ (props) => <Program data="television" {...this.props} {...props} /> } />
          <Route exact path="/vod" component={ () => <VOD /> } />
          <Route exact path="/vod/:channelNumber" render={ (props) => <Program data="vod" {...this.props} {...props} /> } />
          <Route exact path="/radio" component={ () => <Television data="radio" title="radio"/> } />
          <Route exact path="/nagrania" component={ () => <Television data="recordings" title="nagrania"/> } />
          <Route exact path="/nagrania/:channelNumber" render={ (props) => <Program data="recordings" {...this.props} {...props} /> } />
          <Route exact path="/program_tv" render={ () => <Menu data="program-TV"  photos="program-TV" address="program_tv/"/> } />
          <Route exact path="/program_tv/:type" render={ (props) => <MyFiles photos="my-files-icons/" {...this.props} {...props} />} />
          <Route exact path="/program_tv/przypomnienia" render={ (props) => <Program data="recordings" {...this.props} {...props} />} />
          <Route exact path="/portal" render={ () => <img src="/portal.jpg" alt="portal"/>} />
          <Route exact path="/moje_pliki" render={ () => <Menu data="my-files"  photos="my-files-icons" address="moje_pliki/"/> } />
          <Route exact path="/moje_pliki/:type" render={ (props) => <MyFiles photos="my-files-icons/" {...this.props} {...props} />} />
          <Route exact path="/wiadomosci" render={ (props) => <MyFiles photos="" {...this.props} {...props} />} />
          <Route exact path="/szukaj" render={ () => <Search />} />
          <Route exact path="/ustawienia" component={ (props) => <Settings data="Menu" {...this.props} {...props} /> } />
          <Route exact path="/ustawienia/:type" component={ (props) => <Settings {...this.props} {...props} /> } />
          <Route exact path="/ustawienia/:type/:subtype" component={ (props) => <SettingsNested {...this.props} {...props} /> } />
        <Navigation />
      </div>
    );
  }
}

export default App;
