import React from 'react';
import SelectContainer from '../containers/SelectContainer';

const SearchBox = ({ day, section, radius, price, openNow }) => (
  <section>
    <p>
      <SelectContainer type="day" value={day} />
      <span>, Id like to get some </span>
      <SelectContainer type="section" value={section} />
      <span>, ideally without walking more than </span>
      <SelectContainer type="radius" value={radius} />
      <span> from here.</span>
    </p>
    <p>
      <span>Show me </span>
      <SelectContainer type="price" value={price} />
      <span> venues that </span>
      <SelectContainer type="openNow" value={openNow} />
      <span>.</span>
    </p>
    <p>params: {JSON.stringify({ day, section, radius, price, openNow })}</p>
  </section>
);

export default SearchBox;
