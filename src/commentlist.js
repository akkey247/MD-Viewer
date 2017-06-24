import React, {Component} from 'react'
import Comment from './comment.js';

export default class CommentList extends Component {
  render() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
}
