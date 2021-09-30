import React, {Component} from 'react';
import './register.css';

export default class Register extends Component {
    render() {
        const {login} = this.props;
        const content = login ? null : <button className="btn btn-outline-dark reg">Register</button>

        return (
            <div className="register">
                {content}
            </div>
        )
    } 
}
