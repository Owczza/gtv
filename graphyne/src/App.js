import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import Menu from "./Menu/Menu"
import MyFiles from "./Menu/MyFiles"
import Search from "./Menu/Search"
import Settings from "./Settings/Settings"
import RedScreen from "./Puf/RedScreen"
import PUF from "./Puf/PUF"
import ProgramSearch from "./Puf/ProgramSearch"
import SettingsNested from "./Settings/SettingsNested"
import Television from "./Television/Television"
import VOD from "./Television/VOD"
import Program from "./Television/Program"
import VODProgram from "./Television/VODProgram"
import Recommended from "./Television/Recommended"

class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" render={ (props) => <Menu data="slides" photos="menu-icons" address="" {...this.props} {...props} />} />
          <Route exact path="/polecane" render={ (props) => <Recommended {...this.props} {...props} />} />
          <Route exact path="/telewizja" render={ (props) => <Television data="television" title="telewizja" {...this.props} {...props} /> } />
          <Route exact path="/telewizja/:channelNumber" render={ (props) => <Program data="television" {...this.props} {...props} /> } />
          <Route exact path="/vod" render={ (props) => <VOD {...this.props} {...props} /> } />
          <Route exact path="/vod/:channelNumber" render={ (props) => <VODProgram {...this.props} {...props} /> } />
          <Route exact path="/radio" render={ (props) => <Television data="radio" title="radio" {...this.props} {...props} /> } />
          <Route exact path="/nagrania" render={ (props) => <Television data="recordings" title="nagrania" {...this.props} {...props} /> } />
          <Route exact path="/nagrania/:channelNumber" render={ (props) => <Program data="recordings" {...this.props} {...props} /> } />
          <Route exact path="/program_tv" render={ (props) => <Menu data="program-TV"  photos="program-TV" address="program_tv/" {...this.props} {...props} /> } />
          <Route exact path="/program_tv/:type" render={ (props) => <MyFiles photos="my-files-icons/" {...this.props} {...props} />} />
          <Route exact path="/program_tv/przypomnienia" render={ (props) => <Program data="recordings" {...this.props} {...props} />} />
          <Route exact path="/portal" render={ (props) => <img src="/portal.jpg" alt="portal" {...this.props} {...props} />} />
          <Route exact path="/moje_pliki" render={ (props) => <Menu data="my-files"  photos="my-files-icons" address="moje_pliki/" {...this.props} {...props} /> } />
          <Route exact path="/moje_pliki/:type" render={ (props) => <MyFiles photos="my-files-icons/" {...this.props} {...props} />} />
          <Route exact path="/wiadomosci" render={ (props) => <MyFiles photos="" {...this.props} {...props} />} />
          <Route exact path="/szukaj" render={ (props) => <Search {...this.props} {...props} />} />
          <Route exact path="/ustawienia" render={ (props) => <Settings data="Menu" {...this.props} {...props} /> } />
          <Route exact path="/ustawienia/:type" render={ (props) => <Settings {...this.props} {...props} /> } />
          <Route exact path="/ustawienia/:type/:subtype" render={ (props) => <SettingsNested {...this.props} {...props} /> } />
          <Route exact path="/ustawienia/:type/:subtype/puf" render={ (props) => <RedScreen {...this.props} {...props} /> } />
          <Route exact path="/puf" render={ () => <Link to="/puf/1"><img src="/vectra-puf.jpg" alt="b1" /></Link>} />
          <Route exact path="/puf/:id" render={ (props) => <PUF {...this.props} {...props} /> } />
          <Route exact path="/puf/6/szukanie" render={ (props) => <ProgramSearch {...this.props} {...props} /> } />
      </div>
    );
  }
}

export default App;
