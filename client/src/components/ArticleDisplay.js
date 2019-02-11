import React, { Component } from 'react';

class ArticleDisplay extends Component {
    
    render(){
        return (
            <div className="col-12 bg-secondary text-light text-center ">
                <div className="p-2">{this.props.article.title}</div>
          
                <a className="btn btn-dark m-1" href={this.props.article.link} rel="noopener noreferrer" target="_blank">{this.props.article.link}</a>
            </div>
        );
    }
}

export default ArticleDisplay;