import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className="row">
                <h1 className="col-8">Newsroom</h1>
                <h2 className="col-10"><i>A place to comment on articles.</i></h2>
            </div>
        );
    }
}

export default Header;