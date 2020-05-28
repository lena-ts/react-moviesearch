import React from 'react';
import img from '../assets/loading.gif';

const Loading = () => {
  return (
    <div className="no-films">
      {' '}
      <img src={img} width="50" alt="Loading" />
    </div>
  );
};

export default Loading;
