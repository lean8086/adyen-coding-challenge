import React, { Component } from 'react';

class Venue extends Component {
  render() {
    const { beenHere, location, name } = this.props;
    return (
      <article>
        <p>name: {name}</p>
        <p>loc: {location.address} - {location.lat}, {location.lng}</p>
        <p>been here: {beenHere.count ? 'yep' : 'nope'}</p>
      </article>
    );
  };
};

export default Venue;