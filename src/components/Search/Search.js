import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioButton from '../RadioButton/RadioButton';
import queryString from 'query-string';
import { fetchMovies, backToSearch, searchMovies } from '../../actions/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Search extends Component {
  static propTypes = {
    title: PropTypes.string,
    button: PropTypes.string,
    isSearch: PropTypes.bool,
    fetchMovies: PropTypes.func,
    backToSearch: PropTypes.func,
    searchMovies: PropTypes.func,
    match: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object,
  };

  static defaultProps = {
    title: 'Find your movie',
    button: 'Search',
  };

  constructor(props) {
    super(props);
    this.searchBy = React.createRef();
  }
  state = {
    searchValue: '',
    searchBy: 'title',
  };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    const { searchValue, searchBy } = values;

    if (searchValue && searchBy) {
      this.setState(
        {
          searchValue,
          searchBy,
        },
        () => {
          if (!searchValue && !searchBy) return this.props.fetchMovies();
          // this.props.searchMovies(searchValue, searchBy);
        }
      );
    }
  }

  componentDidUpdate(newProps) {
    const values = queryString.parse(this.props.location.search);
    const { searchValue, searchBy } = values;
    // newProps.searchMovies(searchValue, searchBy);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSearch = e => {
    e.preventDefault();

    if (!this.state.searchValue) return;

    const searchBy = this.searchBy.current.getValue();
    this.props.searchMovies(this.state.searchValue, searchBy);

    this.setState({
      // searchValue: ''
    });
    // console.log('HISTORY', this.props.history);
    this.props.history.push(
      `search?searchValue=${this.state.searchValue}&searchBy=${searchBy}`
    );
  };

  render() {
    // console.log(`Searching: '${this.state.searchValue}' by '${this.state.searchBy}'`);
    const { title, button } = this.props;

    const searchComponent = (
      <div className="search">
        <h1>{title}</h1>
        <form onSubmit={this.handleSearch}>
          <div className="search-wrapper">
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              value={this.state.searchValue}
              name="searchValue"
              onChange={this.handleChange}
            />
            <button>{button}</button>
          </div>
          <RadioButton
            title="Search by"
            options={[
              { code: 'title', text: 'title' },
              { code: 'genres', text: 'genre' },
            ]}
            value={this.state.searchBy}
            defaultValue="title"
            ref={this.searchBy}
          />
        </form>
      </div>
    );

    return <React.Fragment>{searchComponent}</React.Fragment>;
  }
}

const mapDispatchToProps = {
  searchMovies,
  fetchMovies,
  backToSearch,
};

// export default connect(null, mapDispatchToProps)(Search);
export default withRouter(connect(null, mapDispatchToProps)(Search));
