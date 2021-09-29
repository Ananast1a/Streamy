import React, {Component} from 'react';
import './movie-list-item.css';

export default class MovieListItem extends Component {
    render() {
        const {name, summary, language, genres, image} = this.props;
        return (
                <div className="movielist app-list-item d-flex">
                    <span className="app-list-item-label">
                        {name}
                    </span>
                    <p>Title: {name}</p>
                    <p>{summary}</p>
                    <p>Language: {language}</p>
                    <p>Genres: {genres}</p>
                    <img src={image} alt="movie"></img>
                    <div className="buttons_wrapper">
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
        )
    }
}
