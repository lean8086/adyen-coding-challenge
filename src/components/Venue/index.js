const React = require('react');
const { connect } = require('react-redux');
const { updateVenue } = require('../../actions');
const PropTypes = require('prop-types');

class Venue extends React.Component {
  constructor() {
    super();
    this.titleElement = React.createRef();
    this.descriptionElement = React.createRef();
    this.update = this.update.bind(this);
  }

  update() {
    this.props.dispatch(updateVenue({
      id: this.props.id,
      title: this.titleElement.current.textContent.trim(),
      description: this.descriptionElement.current.textContent.trim(),
    }))
  }

  render() {
    const { beenHere, location, name } = this.props;
    return (
      <article>
        <p>name: {name}</p>
        <p>loc: {location.address} - {location.lat}, {location.lng}</p>
        <p>been here: {beenHere.count ? 'yep' : 'nope'}</p>
      </article>
    );
  };
};

// Venue.propTypes = {
//   completed: PropTypes.bool,
//   description: PropTypes.string.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
// };
// 
// Venue.defaultProps = {
//   completed: false,
// };

module.exports = connect()(Venue);
