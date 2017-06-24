import React from 'react';
import ReactDom from 'react-dom';
import Counter from './counter.js';
import CommentBox from './commentbox.js';
import CommentList from './commentlist.js';
import CommentForm from './commentform.js';

window.App = {
  render: () => {
    ReactDom.render(
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>,
      document.getElementById('root')
    );
  }
};