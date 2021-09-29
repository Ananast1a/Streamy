import React, {Component} from 'react';
import './movie-list-item.css';

export default class MovieListItem extends Component {
    render() {
        const {id, name, summary, language, genres, image, favorite, liked, onToggleFavorite, onToggleLiked} = this.props;
        let classNames = 'list-group-item';
        if (favorite) {
            classNames+= ' favorite';
        }
        if (liked) {
            classNames+= ' liked';
        }
        return (
            <div className={classNames}>
                <img src={image} alt='movie'></img>
                <div className="movie-info">
                <div className="movie-title">{name} 
                <div className="buttons_wrapper">
                <button 
                    type="button"
                    className="btn-star btn-sm"
                    onClick={() => onToggleFavorite(id)}
                    >
                        <i 
                        className="fa fa-star" 
                        ></i>
                </button>
                <button 
                    type="button"
                    className="btn-like btn-sm"
                    onClick={() => onToggleLiked(id)}
                    >
                        <i className="fa fa-heart"></i>
                    </button>
                    <button 
                    type="button"
                    className="btn-share btn-sm">
                        <i className="fas fa-share"></i>
                    </button>
                </div>
                </div>
                <p className="lang">Language: {language}</p>
                <p className="summary">{summary}</p>
                <hr/>
                <p className="genres">Genres: {genres}</p>
                </div>
               
            </div>
        )
    }
}
