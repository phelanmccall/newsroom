import React, { Component } from 'react';
import Article from "./Article";

const style = {
    height: "100%",
    width: "25vw",
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "#111",
    overflowX: "hidden",
    paddingTop: "20px"
  }

class Sidebar extends Component {
    
    render() {
        
        return (
            <div style={style} className="col-4">
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