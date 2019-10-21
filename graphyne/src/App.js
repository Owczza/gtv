import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import Menu from "./Menu/Menu"
import MyFiles from "./Menu/MyFiles"
import Search from "./Menu/Search"
import Settings from "./Settings/Settings"
import RedScreen from "./Puf/RedScreen"
import PUF from "./Puf/PUF"
import SettingsNested from "./Settings/SettingsNested"
import Television from "./Television/Television"
import VOD from "./Television/VOD"
import Program from "./Television/Program"
import VODProgram from "./Television/VODProgram"
import Recommended from "./Television/Recommended"

class App extends Component {
  state={
    url: "/"
  }

  setUrl = pathname => {
    this.setState({
      url: pathname
    })
  }

  render() {
    return (
      <div>
          <Route exact path="/" render={ () => <Menu data="slides" photos="menu-icons" address="" setUrl={pathname => this.setUrl(pathname)} />} />
          <Route exact path="/polecane" render={ () => <Recommended setUrl={pathname => this.setUrl(pathname)} />} />
          <Route exact path="/telewizja" render={ () => <Television data="television" title="telewizja" setUrl={pathname => this.setUrl(pathname)} /> } />
          <Route exact path="/telewizja/:channelNumber" render={ (props) => <Program data="television" {...this.props} {...props} setUrl={pathname => this.setUrl(pathname)} /> } />
          <Route exact path="/vod" render={ () => <VOD setUrl={pathname => this.setUrl(pathname)} /> } />
          <Route exact path="/vod/:channelNumber" render={ (props) => <VODProgram {...this.props} {...props} setUrl={pathname => this.setUrl(pathname)} /> } />
          <Route exact path="/radio" render={ () => <Television data="radio" title="radio" setUrl={pathname => this.setUrl(pathname)} /> } />
          <Route exact path="/nagrania" render={ () => <Television data="recordings" title="nagrania" setUrl={pathname => this.setUrl(pathname)} /> } />
          <Route exact path="/nagrania/:channelNumber" render={ (props) => <Program data="recordings" {...this.props} {...props} setUrl={pathname => this.setUrl(pathname)} /> } />
          <Route exact path="/program_tv" render={ () => <Menu data="program-TV"  photos="program-TV" address="program_tv/" setUrl={pathname => this.setUrl(pathname)} /> } />
          <Route exact path="/program_tv/:type" render={ (props) => <MyFiles photos="my-files-icons/" {...this.props} {...props} setUrl={pathname => this.setUrl(pathname)} />} />
          <Route exact path="/program_tv/przypomnienia" render={ (props) => <Program data="recordings" {...this.props} {...props} setUrl={pathname => this.setUrl(pathname)} />} />
          <Route exact path="/portal" render={ () => <img src="/portal.jpg" alt="portal" setUrl={pathname => this.setUrl(pathname)} />} />
          <Route exact path="/moje_pliki" render={ () => <Menu data="my-files"  photos="my-files-icons" address="moje_pliki/" setUrl={pathname => this.setUrl(pathname)} /> } />
          <Route exact path="/moje_pliki/:type" render={ (props) => <MyFiles photos="my-files-icons/" {...this.props} {...props} setUrl={pathname => this.setUrl(pathname)} />} />
          <Route exact path="/wiadomosci" render={ (props) => <MyFiles photos="" {...this.props} {...props} setUrl={pathname => this.setUrl(pathname)} />} />
          <Route exact path="/szukaj" render={ () => <Search setUrl={pathname => this.setUrl(pathname)} />} />
          <Route exact path="/ustawienia" render={ (props) => <Settings data="Menu" {...this.props} {...props} setUrl={pathname => this.setUrl(pathname)} /> } />
          <Route exact path="/ustawienia/:type" render={ (props) => <Settings {...this.props} {...props} setUrl={pathname => this.setUrl(pathname)} /> } />
          <Route exact path="/ustawienia/:type/:subtype" render={ (props) => <SettingsNested {...this.props} {...props} setUrl={pathname => this.setUrl(pathname)} /> } />
          <Route exact path="/ustawienia/:type/:subtype/puf" render={ (props) => <RedScreen {...this.props} {...props} setUrl={pathname => this.setUrl(pathname)} /> } />
          <Route exact path="/puf" render={ () => <Link to="/puf/1"><img src="/vectra-puf.jpg" alt="b1" setUrl={pathname => this.setUrl(pathname)} /></Link>} />
          <Route exact path="/puf1" render={ (props) => <PUF {...this.props} {...props} setUrl={pathname => this.setUrl(pathname)} /> } />
        <Link to={this.state.url}>Powrót</Link>
      </div>
    );
  }
}

export default App;
