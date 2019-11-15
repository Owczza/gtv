import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, Button } from "../Components/Components.js";

const MyFiles = props => {
  return (
    <Fragment>
      <Container table>
        <div className="vectra flex-center">
          <img src="/menu-icons/vectra.png" alt="Vectra Logo" />
        </div>
        <div className="clock flex-center"></div>
        <div className="title flex-end auto-height"></div>
        <div className="nav-selected flex-center auto-height">
          <img
            className="auto-height"
            src={`/program-TV/widok_tabeli.jpg`}
            alt="widok tabeli"
          />
        </div>
        <div className="background-left-top flex-center"></div>
        <div className="background-left-bottom flex-center"></div>
      </Container>
      <Link to={props.match.url.replace(`/widok_tabeli`, "")}><Button /></Link>
    </Fragment>
  );
};

export default MyFiles;