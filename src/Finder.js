import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Venue from './Venue';
import get from 'axios';
import config from './config';

class Finder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      error: null,
      isLoaded: false,
    };
  }
  
  componentDidMount() {
    get(config.urls.venues, {
      params: {
        ...config.params,
        v: "20180323",
        ll: "40.7243,-74.0018",
        query: "coffee",
        limit: 1,
      }
    })
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            venues: res.data.response,
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  
  render() {
    const { error, isLoaded, venues } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <SearchBox />
        {venues.groups.map((group, index) => (
          <section key={index}>
            <header>{group.type}</header>
            {group.items.map(({ venue }) => (
              <Venue key={venue.id} {...venue} />
            ))}
          </section>
        ))}
      </div>
    );
  }
};

export default Finder;