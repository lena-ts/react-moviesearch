import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Main from './Main';
import Footer from './Footer';

class Content extends React.Component {
  render() {
    const content = this.props.noPath ? (
      <></>
    ) : (
      <>
        <Main />
        <Footer />
      </>
    );
    return <>{content}</>;
  }
}
Content.propTypes = {
  noPath: PropTypes.bool,
};

const mapStateToProps = state => ({
  noPath: state.settings.noPath,
});

export default connect(mapStateToProps, null)(Content);
