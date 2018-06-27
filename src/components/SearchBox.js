import React from 'react';
import Select from '../containers/SelectContainer';

const SearchBox = ({ day, section, radius, price, openNow }) => (
  <section>
    <p>
      <Select type="day" value={day} />
      <span>, I would like to go to a place with </span>
      <Select type="section" value={section} />
      <span>.</span>
    </p>
    <p>
      <span>Show me </span>
      <Select type="price" value={price} />
      <span> venues that </span>
      <Select type="openNow" value={openNow} />
      <span> and are less than </span>
      <Select type="radius" value={radius} />
      <span> from here.</span>
    </p>
  </section>
);

export default SearchBox;
