import React, { Component } from 'react';
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import Header from "./components/Header";

import "./App.css"
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      focus: {
        title: "select an article to view",
        comments: []
      }
    };

    this.articleHandler = this.articleHandler.bind(this)
    this.addComment = this.addComment.bind(this);
    
  }

  componentDidMount() {
    // Grab the articles as a json
    axios({
      header: "Access-Control-Allow-Origin",
      method: 'get',
      url: '/scrape',
      responseType: 'json',
      crossDomain: true
    }).catch(err => console.log(err));
    axios({
      header: "Access-Control-Allow-Origin",
      method: 'get',
      url: '/articles',
      responseType: 'json',
      crossDomain: true
    }).then((response) => {
           
      this.setState({ articles: response.data })

    }).catch((err) => {
      console.log(err);
    });



  }

  articleHandler(e){
   
    var art;
   
    switch(e.target.localName){
      case "div":
      art = {
        title: e.target.children[0].innerHTML,
        link: e.target.children[1].innerHTML,
        id: e.target.id
      }
      break;
      case "a":
      art = {
        title: e.target.parentElement.children[0].innerHTML,
        link: e.target.innerHTML,
        id: e.target.parentElement.id
      }
      break;
      case "p":
      art = {
        title: e.target.innerHTML,
        link: e.target.parentElement.children[1].innerHTML,
        id: e.target.parentElement.id
      }
     
   
      break;
      default:
      break;
    }
    axios({
      header: "Access-Control-Allow-Origin",
      method: 'GET',
      url: '/article',
      crossDomain: true,
      params: {
        id: art.id
      }
      }).then(response => {
      var data = response.data;
      art.comments = data;
      this.setState({focus: art})
    
    }).catch(err => console.log(err));
    
    
  }

  addComment(comment){
    var proxy = this.state.focus;
    proxy.comments.push(comment);
    this.setState({focus: proxy});
  }


  render() {
    var style ={
      width: "75vw",
      marginLeft: "30vw",
      marginRight: "20vw"
  }
    return (
      <div style={style} className="container">
        <Header />
        <div className="row">
          <Sidebar articles={this.state.articles} handler={this.articleHandler}/>
          <Display article={this.state.focus} addComment={this.addComment}/>
        </div>
      </div>
    );

  }
}

export default App;
