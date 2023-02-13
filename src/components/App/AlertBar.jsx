/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';

function AlertBar() {
  return (
    <div className="alertbar">
      <div className="container text-center">
        <img src={Logo} alt="" />
        &nbsp; Never miss a<b>story</b>
        from us, get weekly updates in your inbox.
        <Link to="/" className="btn subscribe">
          Get Updates
        </Link>
      </div>
    </div>
  );
}

export default AlertBar;
