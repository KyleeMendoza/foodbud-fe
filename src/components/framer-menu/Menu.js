import React, { useState } from "react";
import Hamburger from "hamburger-react";

function Menu({ isOpen, setIsOpen }) {
  return (
    <div>
      <div>
        <Hamburger toggled={isOpen} toggle={setIsOpen} rounded color="white" />
      </div>
    </div>
  );
}

export default Menu;
