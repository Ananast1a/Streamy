import React, {Component} from 'react';

export default class LogIn extends Component {
    render() {
    const {login, onLogin} = this.props;
    const content = login ? null : <button className="btn btn-success" onClick={onLogin}>Log in</button>
    return (
        <div className="log-in">
            {content}
        </div>
        )
    } 
}
