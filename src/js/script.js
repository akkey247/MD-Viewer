import React from 'react';
import ReactDom from 'react-dom';
import FileOpenButton from './fileopenbutton.js';

window.App = {
  render() {
    ReactDom.render(
      <FileOpenButton />,
      document.getElementById('contents')
    );
  }
};