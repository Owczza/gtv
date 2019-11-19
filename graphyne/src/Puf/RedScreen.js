import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, Popup, Text } from "../Components/Components.js";

const RedScreen = props => {
  console.log(props)
  return (
    <Popup red flex className="graphyne-font">
      <img src="/denied.png" alt="denied symbol" />
      <Text large center>Wszystkie ustawienia STB zostaną zmienione na domyślne.<br /><br/>
      Dane użytkownika i kanały zostaną skasowane.<br />
      Ustawienia multiroom zostaną skasowane.</Text>
      <div className="flex align-center justify-around width600">
        <Link to="/puf"><Text list large bold>Potwierdź</Text></Link>
        <Link to={"/ustawienia/instalacja/ustawienia domyślne"}><Text list large bold>Powrót</Text></Link>
      </div>
    </Popup>
  )
}

export default RedScreen;
