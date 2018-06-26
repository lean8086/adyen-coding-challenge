import React, { Component } from 'react';
import Finder from '../components/Finder';
import get from 'axios';
import config from '../config';

class FinderContainer extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      error: null,
      isLoaded: false,
      params: {
        day: null,
        section: 'food',
        radius: 500,
        price: 2,
        openNow: true,
      },
    };
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
    return <Finder {...this.state} />;
  }
};

export default FinderContainer;
