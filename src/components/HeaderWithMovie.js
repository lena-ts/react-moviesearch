import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import MovieHeader from './Movie/MovieHeader';
import { connect } from 'react-redux';
import SearchIcon from './Search/SearchIcon';
import { backToSearch } from '../actions/actions';
import { Link } from 'react-router-dom';

const HeaderWithMovie = ({ showMoviePage, backToSearch, match }) => {
  return (
    <header>
      <div className="container">
        <div className="logo-wrapper">
          <Logo />
          <Link to="/react-moviesearch">
            <SearchIcon isSearch={!showMoviePage} backToSearch={backToSearch} />
          </Link>
        </div>
        <MovieHeader match={match.params.id} />
      </div>
    </header>
  );
};

HeaderWithMovie.propTypes = {
  showMoviePage: PropTypes.bool,
  backToSearch: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  currentMovie: state.currentMovie,
  showMoviePage: !!state.currentMovie,
});

const mapDispatchToProps = {
  backToSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWithMovie);
