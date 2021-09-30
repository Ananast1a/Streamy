import React, {Component} from 'react';
import './user-instance.css';

export default class UserInstance extends Component {

    render() {
        const {id, login, name, friend, onToggleFriend} = this.props;
        const btnIcon = friend ? <i className="fas fa-user-minus"></i> : <i className="fas fa-user-plus"
        ></i> 

        const button = login ? <button 
        type="button"
        className="btn-add-friend btn-sm"
        onClick={() => onToggleFriend(id)}>
            {btnIcon}
        </button> : null

        return (
            <div className="user-instance d-flex align-items-center">
                <div className="user-name">
                    {name}
                </div>
                <div className="d-flex justify-content-center">
                {button}
                </div>
            </div>
        )
    }
}