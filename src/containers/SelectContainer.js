import React from 'react';
import Select from '../components/Select';
import { connect } from 'react-redux';
import { updateParams } from '../actions/params';
import { listVenues } from '../actions/venues';

const SelectContainer = (props) => (
  <Select {...props} />
);

const mapStateToProps = state => ({
  params: state.params,
});

const mapDispatchToProps = dispatch => ({
  updateParams(params) {
    dispatch(updateParams(params));
    dispatch(listVenues(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectContainer);
