'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultEntryComponent = function defaultEntryComponent(props) {
  var completion = props.completion,
      onMouseDown = props.onMouseDown,
      onMouseEnter = props.onMouseEnter,
      onMouseUp = props.onMouseUp,
      parentProps = _objectWithoutProperties(props, ['completion', 'onMouseDown', 'onMouseEnter', 'onMouseUp']);

  return _react2.default.createElement(
    'div',
    parentProps,
    _react2.default.createElement(
      'span',
      { className: 'typeahead-suggestions-entry-text' },
      completion.get('name')
    )
  );
};

defaultEntryComponent.propTypes = {
  completion: _propTypes2.default.instanceOf(_immutable2.default.Map).isRequired,
  onMouseDown: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func
};

exports.default = defaultEntryComponent;