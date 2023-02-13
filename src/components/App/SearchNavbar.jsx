import React from 'react';
import IconUse from '../../assets/svg/IconUse';

function SearchNavbar() {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search"
      />
      <span className="search-icon">{IconUse}</span>
    </form>
  );
}

export default SearchNavbar;
