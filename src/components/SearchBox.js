import React from 'react';
import Select from '../containers/SelectContainer';

const SearchBox = ({ day, section, radius, price, openNow }) => (
  <section>
    <p>
      <Select type="day" value={day} />
      <span>, Id like to get some </span>
      <Select type="section" value={section} />
      <span>, ideally </span>
      <Select type="radius" value={radius} />
      <span> from here.</span>
    </p>
    <p>
      <span>Show me </span>
      <Select type="price" value={price} />
      <span> venues which </span>
      <Select type="openNow" value={openNow} />
      <span>.</span>
    </p>
    <p>params: {JSON.stringify({ day, section, radius, price, openNow })}</p>
  </section>
);

export default SearchBox;
