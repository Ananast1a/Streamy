import React, {Component} from 'react';
import './app-header.css';

export default class AppHeader extends Component {
    render() {
        const {liked, allMovies, favorite} = this.props;
        return (
            <div className="app-header d-flex">
                <h1>Streamy</h1>
                <h2>{allMovies} shows, {liked} liked, {favorite} favorite</h2>
            </div>
        )
    }
}