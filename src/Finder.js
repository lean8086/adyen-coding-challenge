import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Loading from './Loading';
import Error from './Error';
import Group from './Group';
import get from 'axios';
import config from './config';
import initialState from './initialState';

class Finder extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.getVenues();
  }

  UNSAFE_componentWillUpdate() {
    this.getVenues();
  }

  getVenues() {
    get(config.urls.venues, {
      params: {
        ...config.params,
        ...this.state.params,
        ll: "40.7243,-74.0018",
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
          // this.setState({
          //   isLoaded: true,
          //   error,
          // });
        }
      );
  }

  render() {
    const { error, isLoaded, venues } = this.state;
    return (
      <div>
        <SearchBox {...this.state.params} updateParams={params => this.setState({ params })} />
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
  }
};

export default Finder;
