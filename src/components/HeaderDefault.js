import React from 'react';
import Logo from './Logo';
import Search from './Search/Search';
import { fetchMovies } from '../actions/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class HeaderDefault extends React.Component {
  componentDidMount() {
    // this.props.fetchMovies();
  }
  render() {
    return (
      <header>
        <div className="container">
          <div className="logo-wrapper">
            <Logo />
          </div>
          <Search />
        </div>
      </header>
    );
  }
}

HeaderDefault.propTypes = {
  fetchMovies: PropTypes.func,
};

const mapDispatchToProps = {
  fetchMovies,
};

export default connect(null, mapDispatchToProps)(HeaderDefault);
