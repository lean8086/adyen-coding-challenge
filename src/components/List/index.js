import React from 'react';
import Group from '../Group';

const List = ({ venues }) => (
  <div className="innerContainer">
    {venues.totalResults > 3 ?
      // Iterate venues by group
      venues.groups.map(group => group.items.length &&
        <Group key={group.name} {...group} />
      )
      // Few results
      : venues.warning &&
        <div className="innerContainer">
          <h2 className="commonTitle">Try other options ↑</h2>
          <p>{venues.warning.text}</p>
        </div>
    }
  </div>
);

export default List;
