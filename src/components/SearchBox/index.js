import React from 'react';
import Select from '../../containers/SelectContainer';

import './SearchBox.css';

const SearchBox = ({ day, section, radius, price, openNow }) => (
  <div className="searchBox">
    <div className="innerContainer">
      <p>
        <Select type="day" value={day} />
        <span>, I would like to </span>
        <Select type="section" value={section} />
        <span>.</span>
      </p>
      <p>
        <span>Show me </span>
        <Select type="price" value={price} />
        <span> places that </span>
        <Select type="openNow" value={openNow} />
        <span> and are less than </span>
        <Select type="radius" value={radius} />
        <span> away.</span>
      </p>
    </div>
  </div>
);

export default SearchBox;
