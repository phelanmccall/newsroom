import React, { Component } from 'react';
import Comment from "./Comment";

class CommentDisplay extends Component {
    
    render() {

        return (
            <div className="border text-light">
                <p className="p-1">Comments:</p>
                {
                    this.props.comments.map((comment, index) => {
                        return <Comment key={index} comment={comment} removeElement={this.props.removeElement} />
                    })
                }
            </div>
        );
    }
}

export default CommentDisplay;