import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/404.png';
import PropTypes from 'prop-types';
import { getErrorPage } from '../actions/actions';
import { connect } from 'react-redux';

export class ErrorPage extends React.Component {
  componentDidMount() {
    this.props.getErrorPage();
  }
  render() {
    return (
      <header>
        <div className="error-page">
          <div>
            <img src={img} width="200" />
            <div className="highlight">404</div>
            <h2>Nothing found here</h2>
            <span>Go to </span>
            <Link to="/">Homepage</Link>
          </div>
        </div>
      </header>
    );
  }
}

ErrorPage.propTypes = {
  getErrorPage: PropTypes.func,
};

const mapDispatchToProps = {
  getErrorPage,
};

export default connect(null, mapDispatchToProps)(ErrorPage);
