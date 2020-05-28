import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = ({ isSearch, backToSearch }) => {
  return isSearch ? (
    <div></div>
  ) : (
    <div className="icon" onClick={backToSearch}></div>
  );
};

SearchIcon.propTypes = {
  isSearch: PropTypes.bool,
  backToSearch: PropTypes.func,
};

export default SearchIcon;
