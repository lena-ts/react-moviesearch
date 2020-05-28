import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
import RadioButton from './RadioButton/RadioButton';
import MovieItem from './Movie/MovieItem';
import { sortMovies, openMovie } from '../actions/actions';
import sortOptions from '../constants/sortOptions';
import { Link } from 'react-router-dom';

const EmptyContent = dynamic(import('./EmptyContent'));
const Loading = dynamic(import('./Loading'));

export class Main extends React.Component {
  static propTypes = {
    movies: PropTypes.array,
    isLoading: PropTypes.bool,
    sortMovies: PropTypes.func,
    openMovie: PropTypes.func,
    showMoviePage: PropTypes.bool,
    currentMovieGenre: PropTypes.string,
    sortBy: PropTypes.string,
  };

  static defaultProps = {
    movies: [],
    isLoading: true,
  };

  constructor(props) {
    super(props);
    this.sortByRef = React.createRef();
  }

  openMovie = id => {
    this.props.openMovie(id);
  };

  handleSort = code => {
    this.props.sortMovies(code);
  };

  render() {
    const { movies, isLoading } = this.props;
    //get movie list
    const movielist = movies.map(movie => (
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <MovieItem
          id={movie.id}
          img={movie.poster_path}
          title={movie.title}
          genre={movie.genres.join(', ')}
          release_date={movie.release_date.slice(0, 4)}
          onClick={this.openMovie}
        />
      </Link>
    ));

    //display movie list or nothing
    let showResult = movielist.length ? movielist : <EmptyContent />;

    if (isLoading) {
      showResult = <Loading />;
    }

    //add class empty to main section if no films found
    const checkEmptyList = !movielist.length || isLoading ? 'empty' : '';

    return (
      <main className={checkEmptyList}>
        <div className="toolbar-sorter">
          <div className="toolbar-sorter__inner">
            {this.props.showMoviePage ? (
              <div className="total">
                Films by {this.props.currentMovieGenre} genre
              </div>
            ) : (
              <React.Fragment>
                <div className="films-by-genre">
                  {movielist.length} movies found
                </div>
                <RadioButton
                  title="Sort by"
                  options={sortOptions}
                  value={this.props.sortBy}
                  defaultValue={this.props.sortBy}
                  ref={this.sortByRef}
                  dispatchAction={this.handleSort}
                />
              </React.Fragment>
            )}
          </div>
        </div>
        <div className="container">
          <div className="movie-list">{showResult}</div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    isLoading: state.settings.isLoading,
    showMoviePage: !!state.currentMovie,
    currentMovieGenre: state.settings.currentMovieGenre,
    sortBy: state.settings.sortBy,
  };
};

const mapDispatchToProps = {
  sortMovies,
  openMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
