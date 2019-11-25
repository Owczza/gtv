import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Title, Text, Main, Button, Icon } from "../Components/Components.js";

const MyFiles = props => {
  const type = props.match.params.type
    ? props.match.params.type
    : props.photos
    ? "widok listy"
    : "wiadomości";
  console.log(props);
  return (
    <Fragment>
      <Main menu files>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="title">
          <Title>{type.replace("/", "")}</Title>
        </div>
        <div className="clock flex-center"></div>
        <div className="nav-selected-top ">
          <div className="flex-center">
            <Icon src="/info.png" />
            <Text>
              {type === "wiadomości"
                ? "Brak wiadomości"
                : "Brak urządzeń usb lub dlna"}
            </Text>
          </div>
        </div>
        <div className="nav-left flex-end"></div>
        <div className="nav-selected flex-center auto-height"></div>
        <div className="nav-right flex-center"></div>
        <div className="background-left-top"></div>
        <div className="background-left-bottom"></div>
        <div className="nav-selected-bottom"></div>
        <div className="background-right-top"></div>
        <div className="background-right-bottom"></div>
      </Main>
      <Link to={props.match.url.replace(`/${type}`, "")}>
        <Button />
      </Link>
    </Fragment>
  );
};

export default MyFiles;
