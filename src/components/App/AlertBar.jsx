/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../../assets/img';
import { LOCATIONS } from '../../constants/index';

function AlertBar() {
  return (
    <div className="alertbar">
      <div className="container text-center">
        <img src={LOGO} alt="" />
        &nbsp; Never miss a<b>story</b>
        from us, get weekly updates in your inbox.
        <Link to={LOCATIONS.HOME} className="btn subscribe">
          Get Updates
        </Link>
      </div>
    </div>
  );
}

export default AlertBar;
