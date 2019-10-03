import React from "react";

export const ProgramDescription = props => {
  return (
    <p>
      Gatunek: {props.activeProgram.genre} <br />
      Produkcja: {props.activeProgram.production} <br />
      {props.activeProgram.orgTitle
        ? `Tytuł oryginalny: ${props.activeProgram.orgTitle}`
        : props.activeProgram.actors
        ? `Aktorzy: ${props.activeProgram.actors}`
        : ""}
    </p>
  );
};
