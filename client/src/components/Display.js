import React, { Component } from 'react';
import CommentForm from './CommentForm';


class Display extends Component {

    render() {

        return (
            <div className="row">
                <div className="col-12">
                {this.props.article.title}
                </div>
                <a href={this.props.article.link}>{this.props.article.link}</a>
                <CommentForm />
            </div>
            
        );

    }

}

export default Display;