import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/">Menu</NavLink>
      <br />
      <NavLink exact to="/telewizja">Telewizja</NavLink>
      {" | "}
      <NavLink exact to="/telewizja/136">Telewizja-Program</NavLink>
      <br />
      <NavLink exact to="/ustawienia">Ustawienia</NavLink>
      {" | "}
      <NavLink exact to="/ustawienia/pomoc">Ustawienia-Pomoc</NavLink>
      {" | "}
      <NavLink exact to="/ustawienia/diagnostyka">Ustawienia-Diagnostyka</NavLink>
      {" | "}
      <NavLink exact to="/ustawienia/instalacja">Ustawienia-Instalacja</NavLink>
      {" | "}
      <NavLink exact to="/ustawienia/ochrona rodzicielska">Ustawienia-Ochrona Rodzicielska</NavLink>
      {" | "}
      <NavLink exact to="/ustawienia/multiroom">Ustawienia-Multiroom</NavLink>
      {" | "}
      <NavLink exact to="/ustawienia/preferencje">Ustawienia-Preferencje</NavLink>
    </nav>
  );
};

export default Navigation