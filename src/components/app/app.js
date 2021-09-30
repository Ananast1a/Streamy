import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import LogIn from '../log-in/log-in';
import LogOut from '../log-out/log-out';
import SearchPanel from '../search-panel/search-panel';
import MovieStatusFilter from '../movie-status-filter/movie-status-filter';
import MovieList from '../movie-list/movie-list';
import UsersList from '../users/users';
import Register from '../register/register';
import MazeService from '../../services/MazeService';

import './app.css';

export default class App extends Component {
    state = {
        movieList: [],
        loading: true,
        error: false,
        term: '',
        filter: 'all',
        filtergenre: 'All genres...', 
        login: false,
        users: [
            {name: 'John Stansted', friend: false, id: 'u1'},
            {name: 'Oleh Kustovich', friend: false, id: 'u2'},
            {name: 'Anna Shyra', friend: false, id: 'u3'},
            {name: 'Shows Addict', friend: true, id: 'u4'},
            {name: 'Petro Lyubiy', friend: false, id: 'u5'}
        ]
    }

    mazeService = new MazeService();

    componentDidMount() {
        this.mazeService.getAllMovies()
        .then(this.onMovieListLoaded)
        .catch(this.onError)
    }
        
    onMovieListLoaded = (movieList) => {
        this.setState({
            movieList,
            loading: false
        })
    }
        
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onToggleFavorite = (id) => {
        this.setState(({movieList}) => {
                const index = movieList.findIndex(elem => elem.id === id);
                const old = movieList[index];
                const newItem = {...old, favorite: !old.favorite};
                const newArr = [...movieList.slice(0, index), newItem, ...movieList.slice(index + 1)];
                return {
                    movieList: newArr
                }
        })
    }

    onToggleLiked = (id) => {
        this.setState(({movieList}) => {
            const index = movieList.findIndex(elem => elem.id === id);
            const old = movieList[index];
            const newItem = {...old, liked: !old.liked};
            const newArr = [...movieList.slice(0, index), newItem, ...movieList.slice(index + 1)];
            return {
                movieList: newArr
            }
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    onGenreSelect = (e) => {
        this.setState({filtergenre: e.target.value})
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        } 

        return items.filter((item) => {
            return item.name.indexOf(term) > -1
        });
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'liked':
                return items.filter(el => el.liked);
            case 'all':
                return items;
            default: 
            return items;    
        }
    }

    filterGenre = (items, filtergenre) => {
        if (filtergenre === 'All genres...') {
            return items;
        } else {
            return items.filter(el => el.genres.includes(filtergenre));
        }
    }

    onLogin = () => {
        this.setState({login: true});
    }

    onLogout = () => {
        this.setState({login: false});
    }

    onToggleFriend = (id) => {
        this.setState(({users}) => {
            const index = users.findIndex(elem => elem.id === id);
            const old = users[index];
            const newItem = {...old, friend: !old.friend};
            const newArr = [...users.slice(0, index), newItem, ...users.slice(index + 1)];
            return {
                users: newArr
            }
        })
    }

    render() {
        const {movieList, term, filter, filtergenre, login, users} = this.state;
        const liked = movieList.filter(el => el.liked).length;
        const favorite = movieList.filter(el => el.favorite).length;
        const allMovies = movieList.length;
        const visibleMovies = this.filterGenre(this.filterPost(this.searchPost(movieList, term), filter), filtergenre);
        const regularUsers = users.filter(el => !el.friend);
        const friends = users.filter(el => el.friend);

        return (
            <div className="app">            
                <div className="header">
                    <div className="login d-flex justify-content-end">
                        <LogIn
                        onLogin={this.onLogin}
                        login={login}/>
                        <Register
                        login={login}/>
                        <LogOut
                        onLogout={this.onLogout}
                        login={login}/>
                    </div>
                    <AppHeader
                    favorite={favorite}
                    liked={liked}
                    allMovies={allMovies}
                    />
                </div>
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}
                    />
                    <MovieStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    onGenreSelect={this.onGenreSelect}
                    />
                </div>
                <div className="main-content d-flex justify-content-between">
                <MovieList {...this.state}
                movies={visibleMovies}
                onToggleFavorite={this.onToggleFavorite}
                onToggleLiked={this.onToggleLiked}
                />
                <UsersList
                regularUsers={regularUsers}
                friends={friends}
                users={users}
                login={login}
                onToggleFriend={this.onToggleFriend}
                />
                </div>
            </div>
        )
    }
}
