import React, { Component } from 'react';
import Article from "./Article";

const style = {
    height: "100%",
    position: "fixed",
    top: "20vh",
    left: "0",
    color: "white",
    backgroundColor: "#111",
    overflowX: "hidden",
    paddingTop: "20px"
  }

class Sidebar extends Component {
    
    render() {
        
        return (
            <div style={style} className="col-6">
            <h1>Articles:</h1>
            {
                 this.props.articles.map((article, index) => {
                    return <Article key={index} id={article._id} title={article.title} link={article.link} handler={this.props.handler}/>
                })
            }
            </div>
        );
           
        
    }
}

export default Sidebar;