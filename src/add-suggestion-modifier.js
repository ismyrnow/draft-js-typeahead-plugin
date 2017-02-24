import { Modifier, EditorState } from 'draft-js';

import { getSearchText } from 'draft-js-autocomplete-plugin-creator';

export default (trigger, getSuggestionText) => (editorState, suggestion) => {
  const currentSelectionState = editorState.getSelection();
  const { begin, end } = getSearchText(editorState, currentSelectionState);

  // get selection of the autocomplete search text
  const textSelection = currentSelectionState.merge({
    anchorOffset: begin,
    focusOffset: end
  });

  let replacedContent = Modifier.replaceText(
    editorState.getCurrentContent(),
    textSelection,
    `${trigger}${getSuggestionText(suggestion)}`,
  );

  // If the mention is inserted at the end, a space is appended right after for
  // a smooth writing experience.
  const blockKey = textSelection.getAnchorKey();
  const blockSize = editorState.getCurrentContent().getBlockForKey(blockKey).getLength();

  if (blockSize === end) {
    replacedContent = Modifier.insertText(
      replacedContent,
      replacedContent.getSelectionAfter(),
      ' ',
    );
  }

  const newEditorState = EditorState.push(
    editorState,
    replacedContent,
    'insert-suggestion',
  );

  return EditorState.forceSelection(newEditorState, replacedContent.getSelectionAfter());
};
