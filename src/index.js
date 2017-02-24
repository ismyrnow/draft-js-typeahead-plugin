import createCompletionPlugin from 'draft-js-autocomplete-plugin-creator';

import findSuggestionsStrategy from './find-suggestion-strategy';
import addSuggestionModifier from './add-suggestion-modifier';
import wrapEntry from './wrap-entry';
import defaultEntryComponent from './default-entry-component';
import typeaheadSelectionPredicate from './typeahead-selection-predicate';

const defaultConfig = {
  className: 'typeahead-suggestions',
  entryComponent: defaultEntryComponent,
  getSuggestionText: x => x.get('name'),
  trigger: '@'
};

const createTypeaheadPlugin = (config = defaultConfig) => {
  const completionPlugin = createCompletionPlugin(
    findSuggestionsStrategy(config.trigger),
    addSuggestionModifier(config.trigger, config.getSuggestionText),
    wrapEntry(config.entryComponent, config.getSuggestionText),
    'mentionSuggestions',
    [],
    typeaheadSelectionPredicate
  );
  const configWithTheme = {
    theme: {
      mentionSuggestions: config.className
    },
    ...config
  };

  return completionPlugin(configWithTheme);
};

export default createTypeaheadPlugin;
