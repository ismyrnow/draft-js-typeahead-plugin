import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

const defaultEntryComponent = props => {
  const {
    completion,
    onMouseDown, // eslint-disable-line no-unused-vars
    onMouseEnter, // eslint-disable-line no-unused-vars
    onMouseUp, // eslint-disable-line no-unused-vars
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      <span className='typeahead-suggestions-entry-text'>{completion.get('name')}</span>
    </div>
  );
};

defaultEntryComponent.propTypes = {
  completion: PropTypes.instanceOf(Immutable.Map).isRequired,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseUp: PropTypes.func
};

export default defaultEntryComponent;
