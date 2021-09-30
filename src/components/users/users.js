import React, {Component} from 'react';
import './users.css';

import UserInstance from '../user-instance/user-instance';

export default class UsersList extends Component {
    render() {
        const {login, users} = this.props;

        const usersList = users.map(el => {
            const {id, ...userProps} = el;
            return (
                <li key={el.id} className="list-group-item">
                  <UserInstance {...userProps}
                  login={login}
                  />
                </li>
            )
        })
        return (
            <div className="users-list">
                <hr/>
                <h2>Users</h2>
                <hr/>
            <ul className="app-list-item d-flex list-group">
                {usersList}
            </ul>
            </div>
        )
    }
}



