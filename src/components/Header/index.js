import React from 'react';

import './Header.css';

const Header = () => (
  <header className="banner" role="banner">
    <div className="innerContainer">
      <h1 className="banner__text">Human-readable Foursquare filters</h1>
      <a href="https://github.com/lean8086/human-readable-foursquare-filters">
        <img className="banner__img" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"/>
      </a>
    </div>
  </header>
);

export default Header;
