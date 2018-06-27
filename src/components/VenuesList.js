import React from 'react';
import Venue from './Venue';

const VenuesList = ({ venues }) => (
  <div>
    {venues.groups && venues.groups.map(group => (
      group.items.length &&
        <section key={group.name}>
          <header>{group.type} in {venues.headerFullLocation}</header>
          {group.items.map(({ venue }) => (
            <Venue key={venue.id} {...venue} />
          ))}
        </section>
    ))}
  </div>
);

export default VenuesList;
