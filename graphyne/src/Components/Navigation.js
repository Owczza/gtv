import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/">Menu</NavLink>
      {" | "}
      <NavLink exact to="/settings">Ustawienia</NavLink>
      {" | "}
      <NavLink exact to="/settings/help">Ustawienia-Pomoc</NavLink>
    </nav>
  );
};

export default Navigation