import React from 'react';
import Select from '../../containers/SelectContainer';

const SearchBox = ({ day, section, radius, price, openNow }) => (
  <div className="searchBox">
    <p className="searchBox__paragraph">
      <Select type="day" value={day} />
      <span>, I would like to </span>
      <Select type="section" value={section} />
      <span>.</span>
    </p>
    <p className="searchBox__paragraph">
      <span>Show me </span>
      <Select type="price" value={price} />
      <span> places that </span>
      <Select type="openNow" value={openNow} />
      <span> and are less than </span>
      <Select type="radius" value={radius} />
      <span> from me.</span>
    </p>
  </div>
);

export default SearchBox;
