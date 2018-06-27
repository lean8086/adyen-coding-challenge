import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import VenuesList from '../components/VenuesList';
import { connect } from 'react-redux';
import { listVenues } from '../actions/venues';

class App extends Component {
  componentDidMount() {
    this.props.listVenues(this.props.params);
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <SearchBox {...this.props.params} />
          <VenuesList venues={this.props.venues} />
        </main>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  venues: state.venues,
  params: state.params,
});

const mapDispatchToProps = dispatch => ({
  listVenues(params) {
    dispatch(listVenues(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);