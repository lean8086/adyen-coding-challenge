import React from 'react';
import Group from '../Group';

const List = ({ venues }) => (
  <div className="venues">
    <h2 className="venues__title">{venues.headerFullLocation}</h2>
    {venues.totalResults > 3 ?
      // Iterate venues by group
      venues.groups.map(group => group.items.length &&
        <Group key={group.name} {...group} />
      )
      // Few results
      : venues.warning &&
        <p>{venues.warning.text}</p>
    }
  </div>
);

export default List;
