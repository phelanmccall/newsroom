import React, { Component } from 'react';

class Article extends Component {

    render() {

        return (
            <div onClick={this.props.handler} className="col-12 article border border-thick border-secondary mb-1 mr-1 p-3">
              
                    <p>{this.props.title}
                    </p>
                    <a href={this.props.link} target="/_blank">{this.props.link}</a>

            </div>


        );
    }
}

export default Article;