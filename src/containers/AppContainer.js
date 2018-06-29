import React, { Component } from 'react';
import { connect } from 'react-redux';
/**
 * Actions
 */
import { fetchVenues } from '../actions/venues';
import { getLocationParams } from '../actions/params';
/**
 * Components
 */
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import Loading from '../components/Loading';
import Error from '../components/Error';
import List from '../components/List';

/**
 * Container
 */
class App extends Component {
  componentDidMount() {
    this.props.getLocationParams();
  }

  componentDidUpdate(prevProps) {
    const { params, fetchVenues } = this.props;
    // Compare a change in params to make a new search of venues.
    if (JSON.stringify(params) !== JSON.stringify(prevProps.params)) {
      fetchVenues(params);
    }
  }

  render() {
    const { params, loading, located, error, venues } = this.props;
    return (
      <div>
        <Header />
        <main role="main">
          <SearchBox {...params} />
          {!located && <p>da</p>}
          {loading && <Loading />}
          {error && <Error error={error} />}
          {venues && <List venues={venues} />}
        </main>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  venues: state.venues,
  params: state.params,
  loading: state.loading,
  located: state.located,
  error: state.error,
});

const mapDispatchToProps = {
  fetchVenues,
  getLocationParams,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
