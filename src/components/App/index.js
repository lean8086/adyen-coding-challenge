const React = require('react');
const Search = require('../../containers/Search');
const List = require('../../containers/List');

const App = () => (
  <div>
    <header className="banner" role="banner">
      <h1 className="banner__logo">Adyen Coding Challenge</h1>
    </header>
    <main>
      <Search />
      <List />
    </main>
  </div>
);

module.exports = App;
