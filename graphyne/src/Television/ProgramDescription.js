import React from "react";
import { Description } from "../Components/Components.js";

export const ProgramDescription = props => {
  return (
    <Description>
      Gatunek: {props.activeProgram.genre} <br />
      Produkcja: {props.activeProgram.production} <br />
      {props.activeProgram.orgTitle
        ? `Tytuł oryginalny: ${props.activeProgram.orgTitle}`
        : props.activeProgram.actors
        ? `Aktorzy: ${props.activeProgram.actors}`
        : ""}
    </Description>
  );
};
