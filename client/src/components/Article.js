import React, { Component } from 'react';

class Article extends Component {

    render() {

        return (
            <div onClick={this.props.handler} id={this.props.id} className="col-12 article bg-secondary border border-thick border-secondary mb-1 mr-1 p-3">
              
                    <p className="col-12 text-light">{this.props.title}
                    </p>
                   
            </div>


        );
    }
}

export default Article;