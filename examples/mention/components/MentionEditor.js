import React, { PropTypes } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import { List, fromJS } from 'immutable';
import createTypeaheadPlugin from 'draft-js-typeahead-plugin';

import './MentionEditor.scss';
import './Draft.scss';
import '../node_modules/draft-js-typeahead-plugin/src/typeahead-suggestions-styles.scss';

const mentionSuggestionPlugin = createTypeaheadPlugin();
const { CompletionSuggestions } = mentionSuggestionPlugin;
const plugins = [mentionSuggestionPlugin];

const suggestions = fromJS([
  {
    name: 'IshmaelSmyrnow'
  },
  {
    name: 'JohnSmith'
  },
  {
    name: 'JaneDoe'
  }
]);

export default class MentionEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      suggestions: List(),
    };
  }

  onChange = (editorState) => this.setState({ editorState });

  onSearchChange = ({ value }) => {
    const lowerSearch = value.substring(1).toLowerCase();
    this.setState({
      suggestions: suggestions.filter(suggestion => suggestion.get('name').toLowerCase().startsWith(lowerSearch))
    });
  };

  focus = () => this.refs.editor.focus();

  render() {
    return (
      <div>
        <div className='editor' onClick={this.focus} >
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            placeholder='Enter some text with a @ to see the mention typeahead'
            ref='editor'
          />
        </div>
        <CompletionSuggestions
          onSearchChange={this.onSearchChange}
          suggestions={this.state.suggestions}
        />
      </div>
    );
  }
}
