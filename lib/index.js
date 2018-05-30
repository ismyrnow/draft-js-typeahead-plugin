'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _draftJsAutocompletePluginCreator = require('draft-js-autocomplete-plugin-creator');

var _draftJsAutocompletePluginCreator2 = _interopRequireDefault(_draftJsAutocompletePluginCreator);

var _findSuggestionStrategy = require('./find-suggestion-strategy');

var _findSuggestionStrategy2 = _interopRequireDefault(_findSuggestionStrategy);

var _addSuggestionModifier = require('./add-suggestion-modifier');

var _addSuggestionModifier2 = _interopRequireDefault(_addSuggestionModifier);

var _wrapEntry = require('./wrap-entry');

var _wrapEntry2 = _interopRequireDefault(_wrapEntry);

var _defaultEntryComponent = require('./default-entry-component');

var _defaultEntryComponent2 = _interopRequireDefault(_defaultEntryComponent);

var _typeaheadSelectionPredicate = require('./typeahead-selection-predicate');

var _typeaheadSelectionPredicate2 = _interopRequireDefault(_typeaheadSelectionPredicate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultConfig = {
  className: 'typeahead-suggestions',
  entryComponent: _defaultEntryComponent2.default,
  getSuggestionText: function getSuggestionText(x) {
    return x.get('name');
  },
  trigger: '@'
};

var createTypeaheadPlugin = function createTypeaheadPlugin() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;

  var completionPlugin = (0, _draftJsAutocompletePluginCreator2.default)((0, _findSuggestionStrategy2.default)(config.trigger), (0, _addSuggestionModifier2.default)(config.trigger, config.getSuggestionText), (0, _wrapEntry2.default)(config.entryComponent, config.getSuggestionText), 'mentionSuggestions', [], _typeaheadSelectionPredicate2.default);
  var configWithTheme = _extends({
    theme: {
      mentionSuggestions: config.className
    }
  }, config);

  return completionPlugin(configWithTheme);
};

exports.default = createTypeaheadPlugin;