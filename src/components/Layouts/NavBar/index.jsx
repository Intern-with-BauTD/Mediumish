import React from 'react';
import ButtonNavbar from '../../App/ButtonNavbar';
import LogoNavbar from '../../App/LogoNavbar';
import MenuNavbar from '../../App/MenuNavbar';

function Navbar() {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
      <ButtonNavbar />
      <div className="container">
        <LogoNavbar />
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <MenuNavbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
