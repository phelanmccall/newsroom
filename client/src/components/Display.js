import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentDisplay from "./CommentDisplay";
import ArticleDisplay from "./ArticleDisplay";
class Display extends Component {

    render() {

        return (
            <div className="col-10 border bg-dark">
                <ArticleDisplay article={this.props.article}/>
                <CommentForm article={this.props.article} addComment={this.props.addComment}/>
                <CommentDisplay comments={this.props.article.comments} removeElement={this.props.removeElement}/>
            </div>
            
        );

    }

}

export default Display;