import React from 'react';
import * as options from './options';

const Select = ({ type, value }) => (
  <select name={type}>
    {Object.keys(options[type]).map((text, index) => (
      <option
        key={index}
        value={options[type][text]}
      >{text}</option>
    ))}
  </select>
);

export default Select;