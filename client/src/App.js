import React, { Component } from 'react';
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import "./App.css";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      focus: {
        title: "select an article to view"
      }
    };

    this.articleHandler = this.articleHandler.bind(this)
  }

  componentDidMount() {
    // Grab the articles as a json
    console.log("MOUNTED");
    axios({
      header: "Access-Control-Allow-Origin",
      method: 'get',
      url: 'http://localhost:3001/scrape',
      responseType: 'json',
      crossDomain: true
    });
    axios({
      header: "Access-Control-Allow-Origin",
      method: 'get',
      url: 'http://localhost:3001/articles',
      responseType: 'json',
      crossDomain: true
    }).then((response) => {
      // For each one
      console.log("DATA : " + Object.keys(response.data));
      this.setState({ articles: [] });
      this.setState({ articles: response.data })

    }).catch((err) => {
      console.log(err);
    });



  }

  articleHandler(e){
    console.log("CLICK HANDLER");
    console.log(e.target);
    console.log(e.target.parentElement)
    var art;
    if(e.target.children[0]){
      
   }else{
   
   }
    switch(e.target.localName){
      case "div":
      art = {
        title: e.target.children[0].innerHTML,
        link: e.target.children[1].innerHTML
      }
      console.log(art);
    this.setState({focus: art})
      break;
      case "a":
      art = {
        title: e.target.parentElement.children[0].innerHTML,
        link: e.target.innerHTML
      }
      console.log(art);
    this.setState({focus: art})
      break;
      case "p":
      art = {
        title: e.target.innerHTML,
        link: e.target.parentElement.children[1].innerHTML
      }
      console.log(art);
    this.setState({focus: art})
      break;
      default:
      console.log(e.target.localName)
      break;
    }
    
    
  }

  render() {
    var style ={
      width: "75vw",
      marginLeft: "30vw",
      marginRight: "20vw"
  }
    return (
      <div style={style} className="container">
        <div className="row">
          <h1 className="col-8">Note Scraper</h1>
          <h2 className="col-10"><i>If you can do this...the homework should be no problem.</i></h2>
        </div>
        <div className="row">
          <Sidebar articles={this.state.articles} handler={this.articleHandler}/>
          <Display article={this.state.focus}/>
        </div>
      </div>
    );

  }
}

export default App;
