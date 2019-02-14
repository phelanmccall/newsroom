import React, { Component } from 'react';

class Article extends Component {

    render() {

        return (
            <div onClick={this.props.handler} id={this.props.id} className="col-12 article bg-secondary border border-thick border-secondary mb-1 mr-1 p-3">
              
                    <p className="col-12 text-light">{this.props.title}
                    </p>
                    <button style={{"overflow": "hidden"}} className="col-12 btn btn-dark"  rel="noopener noreferrer" href={this.props.link} target="/_blank">{this.props.link}</button>

            </div>


        );
    }
}

export default Article;