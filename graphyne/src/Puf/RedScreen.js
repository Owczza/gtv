import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Popup, red } from "../Components/Components.js";

const RedScreen = props => {
  console.log(props)
  return (
    <Popup theme={red} className="graphyne-font flex">
      <img src="/denied.png" alt="denied symbol" />
      <p>Wszystkie ustawienia STB zostaną zmienione na domyślne.<br />
      Dane użytkownika i kanały zostaną skasowane.<br />
      <br />
      Ustawienia multiroom zostaną skasowane.</p>
      <div className="flex align-center justify-around width600 font30">
        <Link to="/puf"><span className="list-hover">Potwierdź</span></Link>
        <Link to={props.match.url}><span className="list-hover">Powrót</span></Link>
      </div>
    </Popup>
  )
}

export default RedScreen;
