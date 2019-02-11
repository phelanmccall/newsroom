import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentDisplay from "./CommentDisplay";
import ArticleDisplay from "./ArticleDisplay";
class Display extends Component {

    render() {

        return (
            <div className="col-10 border bg-dark">
                <ArticleDisplay article={this.props.article}/>
                <CommentForm id={this.props.article.id} addComment={this.props.addComment}/>
                <CommentDisplay comments={this.props.article.comments}/>
            </div>
            
        );

    }

}

export default Display;