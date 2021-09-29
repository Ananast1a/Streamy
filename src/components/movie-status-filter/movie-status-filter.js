import React from 'react';
import './movie-status-filter.css';

const MovieStatusFilter = () => {
    return (
        <div className="btn-group">
            <button className='btn btn-info' type='button'>All</button>
            <button className='btn btn-outline-secondary' type='button'>Favorites</button>
        </div>
    )
}

export default MovieStatusFilter;