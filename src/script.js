import React from 'react';
import ReactDom from 'react-dom';
import Counter from './counter.js';
import CommentBox from './commentbox.js';
import {data} from './data.js';

window.App = {
  render() {
    ReactDom.render(
      <CommentBox data={data} />,
      document.getElementById('root')
    );
  }
};