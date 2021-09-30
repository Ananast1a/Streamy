import React, {Component} from 'react';
import './movie-status-filter.css';

export default class MovieStatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'All movies'},
        {name: 'liked', label: 'Liked'}
    ]

    render() {
        const {filter, filtergenre, onFilterSelect, onGenreSelect} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button 
                key={name} 
                className={`btn ${clazz}`} 
                type='button'
                onClick={() => onFilterSelect(name)}
                >{label}</button>
            )
        });

        const options = ["All genres...", "Drama", "Crime", "Action", "Thriller", "Science-Fiction", "Horror", "Romance", "Adventure","Espionage", "Music", "Fantasy", "Supernatural"];
        const genreOptions = options.map(option => {
            return (
                <option key={option} value={option}>{option}</option>
            )
        });
        return (
            <div className={`btn-group`}>
                {buttons}
                <select className="btn btn-outline-secondary" name="genre" id="genres" value={filtergenre}
                onChange={onGenreSelect}
                >
                    {genreOptions}
                </select>
            </div>
        )
    }
}