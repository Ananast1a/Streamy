import React, {Component} from 'react';
import './movie-status-filter.css';

export default class MovieStatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'like', label: 'Liked'}
    ]

    render() {
        const {filter, onFilterSelect} = this.props;

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

        const options = ["drama", "crime", "action", "thriller", "science-fiction", "horror", "romance", "adventure","espionage","music"];
        const genreOptions = options.map(el => {
            return (
                <option key={el} value={el}>{el}</option>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
                <select defaultValue={'default'} className="btn btn-outline-secondary" name="genre" id="genres"

                >
                <option value="default" disabled>Choose genre</option>
                    {genreOptions}
                </select>
            </div>
        )
    }
}