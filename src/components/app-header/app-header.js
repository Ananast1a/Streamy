import React, {Component} from 'react';
import './app-header.css';

export default class AppHeader extends Component {
    render() {
        const {liked, allMovies} = this.props;
        return (
            <div className="app-header d-flex">
                <h1>Streamy</h1>
                <h2>{allMovies} movies, {liked} liked</h2>
            </div>
        )
    }
}