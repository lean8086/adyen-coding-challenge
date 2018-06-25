import React from 'react';
import Select from './Select';

const SearchBox = () => (
  <form
    onSubmit={(ev) => {
      ev.preventDefault();
    }}
  >
    <p><Select type="day" value={null} />, Id like to get some <Select type="section" value={null} />, ideally without walking more than <Select type="radius" value={null} /> from here.</p>
    <p>Show me <Select type="price" value={null} /> venues that <Select type="openNow" value={null} />.</p>
    <button type="submit">Explore</button>
  </form>
);

export default SearchBox;