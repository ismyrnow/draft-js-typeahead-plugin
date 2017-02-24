import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';

export default function mentionEntry(WrappedComponent) {
  return class extends Component {

    static propTypes = {
      completion: PropTypes.instanceOf(Immutable.Map).isRequired,
      index: PropTypes.number.isRequired,
      isFocused: PropTypes.bool.isRequired,
      onCompletionFocus: PropTypes.func.isRequired,
      onCompletionSelect: PropTypes.func.isRequired
    };

    constructor(props) {
      super(props);
      this.mouseDown = false;
    }

    componentDidUpdate() {
      this.mouseDown = false;
    }

    onMouseUp = () => {
      if (this.mouseDown) {
        this.mouseDown = false;
        this.props.onCompletionSelect(this.props.completion);
      }
    };

    onMouseDown = event => {
      // Note: important to avoid a content edit change
      event.preventDefault();

      this.mouseDown = true;
    };

    onMouseEnter = () => {
      this.props.onCompletionFocus(this.props.index);
    };

    render() {
      return (
        <WrappedComponent
          className={`typeahead-suggestions-entry ${this.props.isFocused ? 'focused' : ''}`}
          completion={this.props.completion}
          onMouseDown={this.onMouseDown}
          onMouseEnter={this.onMouseEnter}
          onMouseUp={this.onMouseUp}
          role='option' />
      );
    }
  };
}
