import React from 'react';

import './Venue.css';

const Venue = ({ location, name, categories }) => (
  <article className="venue">
    <header className="venue__header">
      <h3>{name}</h3>
      <p className="venue__address">{location.address}, {location.crossStreet}.</p>
      {categories.length &&
        <ul className="venue__categs">
          {categories.map(categ => (
            <li key={categ.id} className="venue__categ">{categ.name}</li>
          ))}
        </ul>
      }
    </header>
    <div className="venue__content">
      <div className="venue__box venue__distance">
        <p>{location.distance}m</p>
      </div>
      <div className="venue__box venue__maps">
        <a href={`https://www.google.com/maps/?q=${location.lat},${location.lng}`} target="_blank">See on map</a>
      </div>
    </div>
  </article>
);

export default Venue;
