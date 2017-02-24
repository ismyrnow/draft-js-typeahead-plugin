import React from 'react';
import ReactDOM from 'react-dom';

import MentionEditor from './components/MentionEditor';

ReactDOM.render(
  <div className='root' style={{ textAlign: 'center', padding: '40px' }}>
    <h2>Mention Example for Typeahead Plugin</h2>
    <MentionEditor />
  </div>,
  document.getElementById('mount')
);
