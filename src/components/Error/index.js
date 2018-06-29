import React from 'react';

const Error = ({ error }) => (
  <div className="innerContainer">
    <h2 className="commonTitle">Error!</h2>
    <p>{error}</p>
  </div>
);

export default Error;
