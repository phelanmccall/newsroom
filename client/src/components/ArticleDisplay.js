import React, { Component } from 'react';

class ArticleDisplay extends Component {
    
    render(){
        return (
            <div className="col-12 bg-secondary text-light text-center p-3">
                <div className="p-2">{this.props.article.title}</div>
          
                <button style={{"overflow": "hidden"}} className="col-12 btn btn-dark" 
                href={this.props.article.link} rel="noopener noreferrer" target="_blank">{this.props.article.link}</button>
            

            
            </div>
        );
    }
}

export default ArticleDisplay;