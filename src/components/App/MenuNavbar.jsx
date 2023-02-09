import React from 'react';
import { Link } from 'react-router-dom';
import SearchNavbar from './SearchNavbar';

function MenuNavbar() {
  return (
    <>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Stories
            <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/post">
            Post
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/author">
            Author
          </Link>
        </li>
      </ul>
      <SearchNavbar />
    </>
  );
}

export default MenuNavbar;
