import findWithRegex from 'find-with-regex';
import escapeRegExp from 'lodash.escaperegexp';

export default trigger => (contentBlock, callback) => {
  findWithRegex(new RegExp(`(\\s|^)${escapeRegExp(trigger)}[^\\s]*`, 'g'), contentBlock, callback);
};
