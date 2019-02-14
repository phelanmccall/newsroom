import React, { Component } from 'react';

var style = {
    
}
class Header extends Component {

    render() {
        return (
            <div className="row text-center">
                <h1 className="col-8 col-lg-12 m-auto">Newsroom</h1>
                <p className="col-12" ><i>A place to comment on articles.</i></p>
            </div>
        );
    }
}

export default Header;