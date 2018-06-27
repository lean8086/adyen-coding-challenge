import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import VenuesList from '../components/VenuesList';
import { connect } from 'react-redux';
import { listVenues } from '../actions/venues';
import { getLocationParams } from '../actions/params';

class App extends Component {
  componentDidMount() {
    this.props.getLocationParams();
  }

  componentDidUpdate(prevProps) {
    // Compare a change in params to make a new search of venues.
    if (JSON.stringify(this.props.params) !== JSON.stringify(prevProps.params)) {
      this.props.listVenues(this.props.params);
    }
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

const mapDispatchToProps = {
  listVenues,
  getLocationParams,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
