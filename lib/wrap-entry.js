'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = mentionEntry;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mentionEntry(WrappedComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.onMouseUp = function () {
        if (_this.mouseDown) {
          _this.mouseDown = false;
          _this.props.onCompletionSelect(_this.props.completion);
        }
      };

      _this.onMouseDown = function (event) {
        // Note: important to avoid a content edit change
        event.preventDefault();

        _this.mouseDown = true;
      };

      _this.onMouseEnter = function () {
        _this.props.onCompletionFocus(_this.props.index);
      };

      _this.mouseDown = false;
      return _this;
    }

    _createClass(_class, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.mouseDown = false;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, {
          className: 'typeahead-suggestions-entry ' + (this.props.isFocused ? 'focused' : ''),
          completion: this.props.completion,
          onMouseDown: this.onMouseDown,
          onMouseEnter: this.onMouseEnter,
          onMouseUp: this.onMouseUp,
          role: 'option' });
      }
    }]);

    return _class;
  }(_react.Component), _class.propTypes = {
    completion: _react.PropTypes.instanceOf(_immutable2.default.Map).isRequired,
    index: _react.PropTypes.number.isRequired,
    isFocused: _react.PropTypes.bool.isRequired,
    onCompletionFocus: _react.PropTypes.func.isRequired,
    onCompletionSelect: _react.PropTypes.func.isRequired
  }, _temp;
}