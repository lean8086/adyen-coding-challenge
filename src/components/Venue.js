import React from 'react';

const Venue = ({ location, name, categories, distance }) => (
  <article>
    <p>name: {name}</p>
    <p>loc: {location.address}</p>
    <p>ll: {location.lat}, {location.lng}</p>
    <p>categories: {categories.map(cat => cat.name)}</p>
    <p>distance: {distance}m</p>
  </article>
);

export default Venue;
