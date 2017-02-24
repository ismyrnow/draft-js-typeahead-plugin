'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

var _draftJsAutocompletePluginCreator = require('draft-js-autocomplete-plugin-creator');

exports.default = function (trigger, getSuggestionText) {
  return function (editorState, suggestion) {
    var currentSelectionState = editorState.getSelection();

    var _getSearchText = (0, _draftJsAutocompletePluginCreator.getSearchText)(editorState, currentSelectionState),
        begin = _getSearchText.begin,
        end = _getSearchText.end;

    // get selection of the autocomplete search text


    var textSelection = currentSelectionState.merge({
      anchorOffset: begin,
      focusOffset: end
    });

    var replacedContent = _draftJs.Modifier.replaceText(editorState.getCurrentContent(), textSelection, '' + trigger + getSuggestionText(suggestion));

    // If the mention is inserted at the end, a space is appended right after for
    // a smooth writing experience.
    var blockKey = textSelection.getAnchorKey();
    var blockSize = editorState.getCurrentContent().getBlockForKey(blockKey).getLength();

    if (blockSize === end) {
      replacedContent = _draftJs.Modifier.insertText(replacedContent, replacedContent.getSelectionAfter(), ' ');
    }

    var newEditorState = _draftJs.EditorState.push(editorState, replacedContent, 'insert-suggestion');

    return _draftJs.EditorState.forceSelection(newEditorState, replacedContent.getSelectionAfter());
  };
};