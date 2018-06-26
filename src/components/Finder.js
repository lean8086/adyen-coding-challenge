import React from 'react';
import SearchBox from './SearchBox';
import Loading from './Loading';
import Error from './Error';
import Group from './Group';

// <SearchBox {...this.state.params} updateParams={params => this.setState({ params })} />
const Finder = ({ error, isLoaded, venues }) => (
  <div>
    {error &&
      <Error error={error} />
    }
    {!isLoaded &&
      <Loading />
    }
    {venues.group && venues.groups.map(group => (
      <Group {...group} />
    ))}
  </div>
);

export default Finder;
