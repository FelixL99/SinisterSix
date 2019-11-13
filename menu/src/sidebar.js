import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
      
   //<Menu customBurgerIcon={ <img src="img/icon.svg" /> } />
      
    <Menu customCrossIcon={ false }>
      <h2>Sparade Budget</h2>
      
      <a className="menu-item" href="/#">
        Home
      </a>

      <a className="menu-item" href="www.google.se">
        Google
      </a>
      
      <a>asdasjda</a>
    </Menu>
  );
};