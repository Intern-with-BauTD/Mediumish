import React from 'react';
import { ReactComponent as Search } from '../../assets/svg/Search.svg';

function SearchNavbar() {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search"
      />
      <span className="search-icon">
        <Search />
      </span>
    </form>
  );
}

export default SearchNavbar;
