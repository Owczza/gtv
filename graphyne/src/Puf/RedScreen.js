import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Popup, Text } from "../Components/Components.js";

const RedScreen = props => {
  console.log(props)
  return (
    <Popup red flex className="graphyne-font">
      <img src="/denied.png" alt="denied symbol" />
      <Text popupText>Wszystkie ustawienia STB zostaną zmienione na domyślne.<br />
      Dane użytkownika i kanały zostaną skasowane.</Text>
      <Text popupText>Ustawienia multiroom zostaną skasowane.</Text><br/>
      <Text popupLink className="flex align-center justify-around width600">
        <Link to="/puf"><span className="list-hover">Potwierdź</span></Link>
        <Link to={"/ustawienia/instalacja/ustawienia domyślne"}><span className="list-hover">Powrót</span></Link>
      </Text>
    </Popup>
  )
}

export default RedScreen;
