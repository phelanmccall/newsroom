import React, { Component } from 'react';

class Comment extends Component {
    

    render() {
        return (
          <p className="col-12 border">{this.props.body}</p>
        );
    }
}

export default Comment;