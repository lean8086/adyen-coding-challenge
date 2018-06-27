import React from 'react';
import searchOptions from '../config/searchOptions';

const Select = ({ type, value, updateParams }) => (
  <select
    name={type}
    value={value}
    onChange={(ev) => updateParams({ [type]: ev.target.value })}
  >
    {Object.keys(searchOptions[type]).map(text => (
      <option
        key={searchOptions[type][text]}
        value={searchOptions[type][text]}
      >{text}</option>
    ))}
  </select>
);

export default Select;
