import React, { Component } from 'react';
import Comment from "./Comment";

class CommentDisplay extends Component {

    render() {

        return (
            <div className="border text-light">
                <h2 className="p-1">Comments:</h2>

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