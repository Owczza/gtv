import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, Button } from "../Components/Components.js";

const MyFiles = props => {
  const type = props.match.params.type ? props.match.params.type : props.photos ? "widok_listy" : "wiadomosci";
  console.log(props)
  return (
    <Fragment>
      <Container menu>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="clock flex-center"></div>
        <div className="nav-left flex-end auto-height"></div>
        <div className="nav-selected flex-center auto-height">
          <img
            className="auto-height"
            src={`/${props.photos}${type}.jpg`}
            alt={type}
          />
        </div>
        <div className="nav-right flex-center"></div>
        <div className="background-left-top flex-center"></div>
        <div className="background-left-bottom flex-center"></div>
        <div className="background-right-top flex-center"></div>
        <div className="background-right-bottom flex-center"></div>
      </Container>
      <Link to={props.match.url.replace(`/${type}`, "")}><Button /></Link>
    </Fragment>
  );
};

export default MyFiles;
