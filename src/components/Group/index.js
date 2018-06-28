import React from 'react';
import Venue from '../Venue';

const Group = ({ type, items }) => (
  <section className="venues__group">
    <header>{type}</header>
    {items.map(({ venue }) => (
      <Venue key={venue.id} {...venue} />
    ))}
  </section>
);

export default Group;
