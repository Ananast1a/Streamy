import React, {Component} from 'react';
import './user-instance.css';

export default class UserInstance extends Component {

    render() {
        const {login, name} = this.props;
        const button = login ? <button 
        type="button"
        className="btn-add-friend btn-sm">
            <i className="fas fa-user-plus"></i>
        </button> : null

        return (
            <div className="user-instance d-flex align-items-center">
                <span className="user-name">
                    {name}
                </span>
                <div className="d-flex justify-content-center">
                {button}
                </div>
            </div>
        )
    }
}