"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var start = _ref.start,
      end = _ref.end,
      anchorOffset = _ref.anchorOffset;

  return start === 0 && anchorOffset === 1 && anchorOffset <= end || // {trigger} is the first character
  anchorOffset > start + 1 && anchorOffset <= end; // {trigger} is in the text or at the end
};

; // Checks that the cursor is after the trigger character (e.g. '@') but still
// somewhere in the word (search term). Setting it to allow the cursor to be