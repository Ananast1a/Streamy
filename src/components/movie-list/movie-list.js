import React, {Component} from 'react';
// import MazeService from '../../services/MazeService';
// import {getShows} from '../../services/GetShows';
// import MovieListItem from '../movie-list-item/movie-list-item';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './movie-list.css';
import MovieListItem from '../movie-list-item/movie-list-item';

export default class MovieList extends Component {
    render() {
        const {movieList, loading, error, term, filter, onToggleLiked, onToggleFavorite, movies, login} = this.props;

        const items = movies.map(el => {
            const {...itemProps} = el;
            return (
                <li key={el.id} className="list-group-item">
                  <MovieListItem {...itemProps}
                  onToggleFavorite={onToggleFavorite}
                  onToggleLiked={onToggleLiked}
                  login={login}
                  />
                </li>
            )
        })

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className ="app-list">
            <ul>
                {spinner}
                {errorMessage}
                {content}
            </ul>
            </div>
        )
    }
} 
