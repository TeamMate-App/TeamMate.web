import React, { useContext } from 'react'
import './Coments.css'
import { CreateComment, getComments } from '../../services/CommentService'
import {getUserInfo} from "../../services/UserService"


class CommentBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showComments: false,
      comments: []
    };
  }

  componentDidMount() {
    getComments()
      .then(res => {
        this.setState({
          comments: res.filter((c) => { 
            return c.game === this.props.Game.id })
            
           
            
        })
      })
      .catch(err => (err))


  }



  render() {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show Comments';

    if (this.state.showComments) {
      buttonText = 'Hide Comments';
      commentNodes = <div className="comment-list">{comments}</div>;
    }

    return (
      <div className="comment-box">
        <CommentForm GameID={this.props.Game.id} addComment={this._addComment.bind(this)} />
        <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
          {buttonText}
        </button>
        <h3>Comments</h3>
        <h4 className="comment-count">
          {this._getCommentsTitle(comments.length)}
        </h4>
        {commentNodes}
      </div>
    );
  } // end render

  _addComment(author, body) {
    const comment = {
      author,
      body,
      game: this.props.Game.id
    };
    this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment
          author={comment.author}
          body={comment.body}
          key={comment._id} />
      );
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }
} // end CommentBox component

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="comment-form-fields">
          
          <textarea placeholder="Comment" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post Comment</button>
        </div>
      </form>
    );
  }
  // end render

  _handleSubmit(event) {
    event.preventDefault();   // prevents page from reloading on submit
    getUserInfo().then((response) =>{
      let author= response.name
      let body = this._body;
      CreateComment(author, body.value, this.props.GameID)
      this.props.addComment(author, body.value, this.props.GameID);
    })
  }
} // end CommentForm component

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">- {this.props.body}</p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete" onClick={this._deleteComment}>Delete Comment</a>
        </div>
      </div>
    );
  }
  _deleteComment() {
    alert("-- DELETE Comment Functionality COMMING SOON...");
  }
}
export default CommentBox