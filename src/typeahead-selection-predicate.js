// Checks that the cursor is after the trigger character (e.g. '@') but still
// somewhere in the word (search term). Setting it to allow the cursor to be
// left of the trigger character causes troubles due selection confusion.
export default function({ start, end, anchorOffset }) {
  return start === 0 && anchorOffset === 1 && anchorOffset <= end || // {trigger} is the first character
    anchorOffset > start + 1 && anchorOffset <= end; // {trigger} is in the text or at the end
};
