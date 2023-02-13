import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';

function LogoNavbar() {
  return (
    <Link className="navbar-brand" to="/">
      <img src={Logo} alt="logo" />
    </Link>
  );
}

export default LogoNavbar;
