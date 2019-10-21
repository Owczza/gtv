import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Red } from "../Components/Components.js";

const RedScreen = props => {
  console.log(props)
  return (
    <Red className="graphyne-font">
      <img src="/puf.png" />
      <p>Wszystkie ustawienia STB zostaną zmienione na domyślne.<br />
      Dane użytkownika i kanały zostaną skasowane.<br />
      <br />
      Ustawienia multiroom zostaną skasowane.</p>
      <div className="flex align-center justify-around width600 font30">
        <Link to="/puf"><span className="list-hover">Potwierdź</span></Link>
        <Link to={props.match.url}><span className="list-hover">Powrót</span></Link>
      </div>
    </Red>
  )
}

export default RedScreen;
