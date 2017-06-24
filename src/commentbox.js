import React, {Component} from 'react'
import CommentList from './commentlist.js';
import CommentForm from './commentform.js';

export default class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}