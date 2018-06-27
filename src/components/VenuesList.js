import React from 'react';
import Venue from './Venue';

const VenuesList = ({ venues }) => (
  <div>
    {venues.totalResults > 3 ?
      // Iterate venues by group
      venues.groups.map(group => (
        group.items.length &&
          <section key={group.name}>
            <header>{group.type} in {venues.headerFullLocation}</header>
            {group.items.map(({ venue }) => (
              <Venue key={venue.id} {...venue} />
            ))}
          </section>
      ))
      : // Few results
      <p>{venues.warning}</p>
    }
  </div>
);

export default VenuesList;
