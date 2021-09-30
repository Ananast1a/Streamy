import React, {Component} from 'react';
import './users.css';

import UserInstance from '../user-instance/user-instance';

export default class UsersList extends Component {
    render() {
        const {login, users, regularUsers, friends} = this.props;

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

        const regularUsersList = regularUsers.map(el => {
            const {id, ...userProps} = el;
            return (
                <li key={el.id} className="list-group-item">
                  <UserInstance {...userProps}
                  login={login}
                  />
                </li>
            )
        })

        const friendsList = friends.map(el => {
            const {id, ...userProps} = el;
            return (
                <li key={el.id} className="list-group-item">
                  <UserInstance {...userProps}
                  login={login}
                  />
                </li>
            )
        })

        const loggedList = <div><hr/><h2>Friends</h2><ul>{friendsList}</ul> <hr/><h2>More users</h2><ul>{regularUsersList}</ul></div>
        const unloggedList = <div><hr/>
                    <h2>Users</h2>
                    <hr/>
                <ul className="app-list-item d-flex list-group">
                    {usersList}
                </ul></div>

        const content = login ? loggedList : unloggedList;
        return (
            <div className="users-list">
                {content}
            </div>
        )
    }
}



