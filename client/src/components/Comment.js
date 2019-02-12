import React, { Component } from 'react';
import axios from "axios";
function removeElement(e) {
  // Removes an element from the document.
  console.log(e.target.parentNode)
  var element = document.getElementById(e.target.parentNode.id);
  axios({
    method: "DELETE",
    url: "/note",
    data: {
      id: element.id
    }
  }).catch(err => console.log(err))
 
  
  }
class Comment extends Component {
    

    render() {
      console.log(this.props.comment._id)
        return (
          <div id={this.props.comment._id} className="row m-auto border"><p className="col-8">{this.props.comment.body}</p> <button className="btn btn-danger col-4" onClick={removeElement}>X</button></div>
        );
    }
}

export default Comment;