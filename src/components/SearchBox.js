import React from 'react';
import Select from './Select';

const SearchBox = ({ day, section, radius, price, openNow, updateParams }) => (
  <form
    onSubmit={(ev) => {
      ev.preventDefault();
      let params = {};
      // Extract values from specific elements
      ['day', 'section', 'radius', 'price', 'openNow'].forEach(name => (
        params[name] = ev.target.elements[name].value
      ));
      updateParams(params);
    }}
  >
    <p><Select type="day" value={day} />, Id like to get some <Select type="section" value={section} />, ideally without walking more than <Select type="radius" value={radius} /> from here.</p>
    <p>Show me <Select type="price" value={price} /> venues that <Select type="openNow" value={openNow} />.</p>

    <button type="submit">Explore</button>
  </form>
);

export default SearchBox;
