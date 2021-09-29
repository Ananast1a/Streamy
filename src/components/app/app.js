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

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        } 

        return items.filter((item) => {
            return item.name.indexOf(term) > -1
        });
    }

    filterPost = (items, filter) => {
        // if (filter === 'liked') {
        //     return items.filter(el => el.liked)
        // } else {
        //     return items;
        // }
        switch (filter) {
            case 'liked':
                return items.filter(el => el.liked)
            case 'all':
                return items;
            case 'drama':
                return items.filter(el => el.genres.match(/(drama)/ig))
            ;
            default: 
            return items;
            
        }

    }

    render() {
        const {movieList, term, filter} = this.state;
        const liked = movieList.filter(el => el.liked).length;
        const allMovies = movieList.length;
        const visibleMovies = this.filterPost(this.searchPost(movieList, term), filter);

        return (
            <div className="app">            
                <div className="header">
                    <div className="login d-flex justify-content-end">
                        <LogIn/>
                        <Register/>
                    </div>
                    <AppHeader
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
                    />
                </div>
                <div className="main-content d-flex justify-content-between">
                <MovieList {...this.state}
                movies={visibleMovies}
                onToggleFavorite={this.onToggleFavorite}
                onToggleLiked={this.onToggleLiked}
                />
                <UsersList/>
                </div>
            </div>
        )
    }
}
