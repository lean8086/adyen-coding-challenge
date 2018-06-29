import React from 'react';
import Group from '../Group';
import Message from '../Message';

const List = ({ venues }) => (
  <div className="innerContainer">
    {venues.totalResults > 3 ?
      // Iterate venues by group
      venues.groups.map(group => group.items.length &&
        <Group key={group.name} {...group} />
      )
      // Few results
      : venues.warning &&
        <Message
          title="Try other options ↑"
          content={venues.warning.text}
        />
    }
  </div>
);

export default List;
