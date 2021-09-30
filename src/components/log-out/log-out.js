import React, {Component} from 'react';

export default class LogOut extends Component {
    render() {
        const {login, onLogout} = this.props;
        const content = login ? <button className="btn btn-outline-dark ml-3" onClick={onLogout}>Log out</button> : null

        return (
            <div className="log-out">
                 {content}   
            </div>
        )
    } 
}
