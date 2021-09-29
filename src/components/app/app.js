import React from 'react';

import AppHeader from '../app-header/app-header';
import LogIn from '../log-in/log-in';
import SearchPanel from '../search-panel/search-panel';
import MovieStatusFilter from '../movie-status-filter/movie-status-filter';
import MovieList from '../movie-list/movie-list';
import UsersList from '../users/users';
import Register from '../register/register';

import './app.css';

const App = () => {
    return (
        <div className="app">            
            <div className="header">
                <div className="login d-flex justify-content-end">
                    <LogIn/>
                    <Register/>
                </div>
                <AppHeader/>
            </div>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <MovieStatusFilter/>
            </div>
            <div className="main-content d-flex justify-content-between">
            <MovieList/>
            <UsersList/>
            </div>
        </div>
    )
}

export default App;