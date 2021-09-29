import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import LogIn from '../log-in/log-in';
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
        filter: 'all'
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

    filterPost = (items, filter) => {
        if (filter === 'liked') {
            return items.filter(el => el.liked)
        } else {
            return items;
        }
    }

    render() {
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
                <MovieList {...this.state}
                onToggleFavorite={this.onToggleFavorite}
                onToggleLiked={this.onToggleLiked}
                />
                <UsersList/>
                </div>
            </div>
        )
    }
}
