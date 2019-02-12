import React, { Component } from 'react';
import axios from "axios";
function removeElement(e) {
  // Removes an element from the document.
  var element = document.getElementById(e.target.parentNode.id);
  axios({
    method: "DELETE",
    url: "/note",
    data: {
      id: element.id
    }
  }).then(function(){
    element.removeChild(e.target);
  }).catch(err => console.log(err));
 
  
  }
class Comment extends Component {
    

    render() {
        return (
          <div id={this.props.comment._id} className="row m-auto border"><p className="col-8">{this.props.comment.body}</p> <button className="btn btn-danger col-4" onClick={removeElement}>X</button></div>
        );
    }
}

export default Comment;