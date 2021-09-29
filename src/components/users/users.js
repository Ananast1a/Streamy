import React from 'react';
import './users.css';

import UserInstance from '../user-instance/user-instance';

const UsersList = () => {
    return (
        <div className="users-list">
            <hr/>
            <h2>Users</h2>
            <hr/>
        <ul className="app-list-item d-flex list-group">
            <UserInstance/>
            <UserInstance/>
            <UserInstance/>
        </ul>
        </div>
    )
}

export default UsersList;

