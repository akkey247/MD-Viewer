import React from 'react';
import ReactDom from 'react-dom';
import Counter from './counter.js';
import CommentBox from './commentbox.js';

window.App = {
  render() {
    ReactDom.render(
      <CommentBox />,
      document.getElementById('root')
    );
  }
};