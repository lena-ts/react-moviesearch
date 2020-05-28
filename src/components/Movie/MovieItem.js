import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ id, img, title, genre, release_date, onClick }) => {
  const handleClick = () => {
    onClick(id, genre);
    window.scrollTo(0, 0);
  };

  return (
    <div className="movie-item" onClick={handleClick}>
      <img src={img} />
      <div className="title">
        <div>
          <h4>{title}</h4>
          <span>{genre}</span>
        </div>
        <div className="date">{release_date}</div>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  genre: PropTypes.string,
  release_date: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
};

export default MovieItem;
