import React, {Component} from 'react'
import Comment from './comment.js';

export default class CommentList extends Component {
  render() {
    var commentNodes = this.props.data.map(function (comment, i) {
      return (
        <Comment key={i} author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
