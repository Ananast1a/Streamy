import React, {Component} from 'react';
import './users.css';

import UserInstance from '../user-instance/user-instance';

export default class UsersList extends Component {
    render() {
        const {login, users, regularUsers, friends, onToggleFriend} = this.props;

        const usersList = users.map(el => {
            const {...userProps} = el;
            return (
                <li key={el.id} className="list-group-item">
                  <UserInstance {...userProps}
                  login={login}
                  />
                </li>
            )
        })

        const regularUsersList = regularUsers.map(el => {
            const {...userProps} = el;
            return (
                <li key={el.id} className="list-group-item">
                  <UserInstance {...userProps}
                  login={login}
                  onToggleFriend={onToggleFriend}
                  />
                </li>
            )
        })

        const friendsList = friends.map(el => {
            const {...userProps} = el;
            return (
                <li key={el.id} className="list-group-item">
                  <UserInstance {...userProps}
                  login={login}
                  onToggleFriend={onToggleFriend}
                  />
                </li>
            )
        })

        const loggedList = <div><hr/><h2>Friends</h2><ul className="friend-list">{friendsList}</ul> <hr/><h2>More users</h2><ul className="regular-users-list">{regularUsersList}</ul></div>
        const unloggedList = <div><hr/>
                    <h2>Users</h2>
                    <hr/>
                <ul className="app-list-item d-flex list-group regular-users-list">
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



