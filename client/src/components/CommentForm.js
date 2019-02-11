import React, { Component } from 'react';

class CommentForm extends Component {

    render() {

        return (
            <form >
            <label className="p-2 col-3">Comment:</label>
            <input className="col-9" maxLength="256"></input>
             </form>
        );

    }

}

export default CommentForm;