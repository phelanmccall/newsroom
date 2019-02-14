import React, { Component } from 'react';
import axios from 'axios';

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            note: ""    
        }

        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCommentChange(e) {
        this.setState({ note: e.target.value })
    }

    handleSubmit(e) {
        
        e.preventDefault()
        if(this.state.note.length > 0){
         
            axios({
                header: "Access-Control-Allow-Origin",
                method: 'POST',
                url: '/note',
                crossDomain: true,
                data: {
                    note: this.state.note,
                    id: this.props.article.id
                }
            }).then(() =>{
                this.setState({note: ""})
                document.getElementById("comment").value = "";
                this.props.addComment();
                
            }).catch(err => console.log(err))
        }
    }

    render() {

        return (
            <form method="POST" action={"/articles/" + this.props.article.id} className="row m-1">
                <input className="btn btn-secondary col-12" type="submit" onClick={this.handleSubmit} value="Comment"></input>
                <input id="comment" name="note" type="text" maxLength="256" className="col-12" onChange={this.handleCommentChange}></input>
            </form>
        );

    }

}

export default CommentForm;