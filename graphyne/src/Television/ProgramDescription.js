import React from "react";
import { Text } from "../Components/Components.js";

export const ProgramDescription = props => {
  return (
    <Text medium white>
      Gatunek: {props.activeProgram.genre} <br />
      Produkcja: {props.activeProgram.production} <br />
      {props.activeProgram.orgTitle
        ? `Tytuł oryginalny: ${props.activeProgram.orgTitle}`
        : props.activeProgram.actors
        ? `Aktorzy: ${props.activeProgram.actors}`
        : ""}
    </Text>
  );
};
