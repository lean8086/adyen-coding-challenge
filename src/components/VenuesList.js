import React from 'react';
import Venue from './Venue';

const VenuesList = ({ venues }) => (
  <div>
    {venues && venues.map(group => (
      <section key={group.type}>
        <header>{group.type}</header>
        {group.items.map(({ venue }) => (
          <Venue key={venue.id} {...venue} />
        ))}
      </section>
    ))}
  </div>
);

export default VenuesList;
