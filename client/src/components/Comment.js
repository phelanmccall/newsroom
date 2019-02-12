import React, { Component } from 'react';

class Comment extends Component {
    

    render() {
        return (
          <div id={this.props.comment._id} className="row m-auto border"><p className="col-8">{this.props.comment.body}</p> <button className="btn btn-danger col-4" onClick={this.props.removeElement}>X</button></div>
        );
    }
}

export default Comment;