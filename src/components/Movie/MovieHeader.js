import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openMovie } from '../../actions/actions';
import Loading from '../Loading';

class MovieHeader extends React.Component {
  componentDidMount() {
    // this.props.openMovie(this.props.match);
  }

  render() {
    const { currentMovie, showMoviePage } = this.props;

    const movieHeaderContent = showMoviePage ? (
      <div className="movie-header">
        <div className="image">
          <img src={currentMovie.poster_path} />
        </div>
        <div className="content">
          <div className="title">
            <h1>{currentMovie.title}</h1>
            <div>{currentMovie.vote_average}</div>
          </div>
          <div className="tagline">{currentMovie.tagline}</div>
          <div className="data">
            <span>{currentMovie.release_date.slice(0, 4)}</span>
            <span>{currentMovie.runtime} min</span>
          </div>
          <div className="overview">{currentMovie.overview}</div>
        </div>
      </div>
    ) : (
      <div>
        <Loading />
      </div>
    );

    return <React.Fragment>{movieHeaderContent}</React.Fragment>;
  }
}

MovieHeader.propTypes = {
  openMovie: PropTypes.func,
  match: PropTypes.string,
  currentMovie: PropTypes.object,
  showMoviePage: PropTypes.bool,
};
const mapStateToProps = state => ({
  currentMovie: state.currentMovie,
  showMoviePage: !!state.currentMovie,
});

const mapDispatchToProps = {
  openMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieHeader);
