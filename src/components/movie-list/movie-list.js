import React, {Component} from 'react';
import MazeService from '../../services/MazeService';
// import {getShows} from '../../services/GetShows';
// import MovieListItem from '../movie-list-item/movie-list-item';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './movie-list.css';

class MovieList extends Component {
    state = {
        movieList: [
            // {id: 1, name: 'first', language: 'brekie', summary: 'bb', image: 'sddfsgdfgf'},
            // {id: 2, name: 'first', language: 'quickie', summary: 'bb', image: 'sddsgfgf'}
        ],
        loading: true,
        error: false
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
        


    render() {
        console.log(this.state.movieList);
        const items = this.state.movieList.map(el => {
            return (
                <li key={el.id} className="list-group-item">
                    <img src={el.image} alt='movie'></img>
                    <div className="movie-info">
                    <div className="movie-title">{el.name} 
                    <div className="buttons_wrapper">
                    <button 
                    type="button"
                    className="btn-star btn-sm">
                    <i 
                    className="fa fa-star" 
                    ></i>
                    </button>
                    <button 
                        type="button"
                        className="btn-like btn-sm">
                            <i className="fa fa-heart"></i>
                        </button>
                        <button 
                        type="button"
                        className="btn-share btn-sm">
                            <i className="fas fa-share"></i>
                        </button>
                    </div>
                    </div>
                    <p className="lang">Language: {el.language}</p>
                    <p className="summary">{el.summary}</p>
                    <hr/>
                    <p className="genres">Genres: {el.genres}</p>
                    </div>
                   
                </li>
            )
        })

        const {error, loading} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <ul className ="app-list">
                {spinner}
                {errorMessage}
                {content}
            </ul>
        )

    }
} 


export default MovieList;