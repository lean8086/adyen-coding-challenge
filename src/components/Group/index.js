import React from 'react';
import Venue from '../Venue';

import './Group.css';

const Group = ({ type, items }) => (
  <section className="venues__group">
    <h2 className="commonTitle">{type}</h2>
    {items.map(({ venue }) => (
      <Venue key={venue.id} {...venue} />
    ))}
  </section>
);

export default Group;
