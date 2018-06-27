import React from 'react';
import * as options from './options';

const Select = ({ type, value, updateParams }) => (
  <select
    name={type}
    selected={value}
    onChange={(ev) => updateParams({ [type]: ev.target.value })}
  >
    {Object.keys(options[type]).map(text => (
      <option
        key={options[type][text]}
        value={options[type][text]}
      >{text}</option>
    ))}
  </select>
);

export default Select;
