import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentDisplay from "./CommentDisplay";
import ArticleDisplay from "./ArticleDisplay";

const style = {
    height: "100%",
    position: "fixed",
    top: "20vh",
    right: "0",
    color: "white",
    backgroundColor: "#111",
    overflowX: "hidden",
    paddingTop: "20px"
  }

class Display extends Component {
    

    render() {

        return (
            <div className="col-6 border bg-dark" style={style}>
                <ArticleDisplay article={this.props.article}/>
                <CommentForm article={this.props.article} addComment={this.props.addComment}/>
                <CommentDisplay comments={this.props.article.comments} removeElement={this.props.removeElement}/>
            </div>
            
        );

    }

}

export default Display;