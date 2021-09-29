import React from 'react';
import './user-instance.css';

const UserInstance = () => {
    return (
        <li className="user-instance d-flex align-items-center">
            <span className="user-name">
                John Smith
            </span>
            <div className="d-flex justify-content-center">
            <button 
                type="button"
                className="btn-add-friend btn-sm">
                    <i className="fas fa-user-plus"></i>
                </button>
            </div>
        </li>
    )
}

export default UserInstance;