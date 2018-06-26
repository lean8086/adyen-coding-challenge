import React from 'react';

const Venue = ({ location, name }) => (
  <article>
    <p>name: {name}</p>
    <p>loc: {location.address} - {location.lat}, {location.lng}</p>
  </article>
);

export default Venue;
