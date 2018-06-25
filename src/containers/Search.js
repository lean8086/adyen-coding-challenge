const React = require('react');
const { connect } = require('react-redux');
const Venue = require('../components/Venue');
const NoResults = require('../components/NoResults');
const { listVenues } = require('../actions');
const PropTypes = require('prop-types');

class List extends React.Component {
  componentDidMount() {
    this.props.listVenues();
  }
  
  //food, drinks, coffee, shops, arts, outdoors, sights, trending, nextVenues

  render() {
    return (
      <div>
        <p>contextMessage: {this.props.meta.headerMessage}</p>
        <p>location: {this.props.meta.headerFullLocation}</p>
        <p>query: {this.props.meta.query}</p>
        <p>radius: {this.props.meta.suggestedRadius}</p>

        {this.props.venues.length ?
          this.props.venues.map((group, index) => (
            <section key={index}>
              <header>{group.type}</header>
              {group.items.map(({ venue }) => (
                <Venue key={venue.id} {...venue} />
              ))}
            </section>
          ))
        :
          <NoResults />
        }
      </div>
    )
  }
};

const mapStateToProps = state => ({
  meta: state.meta,
  venues: state.venues,
});

const mapDispatchToProps = dispatch => ({
  listVenues() {
    dispatch(listVenues());
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
