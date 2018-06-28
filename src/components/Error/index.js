import React from 'react';

const Error = ({ error }) => (
  <div className="error">
    <h2 className="content__title">Error</h2>
    <p className="content__message">{error}</p>
  </div>
);

export default Error;
