import React, {Component} from 'react';

export default class SearchPanel extends Component {
    onUpdateSearching = (e) => {
        const {onUpdateSearch} = this.props;
        const term = e.target.value;
        this.setState({term});
        onUpdateSearch(term);
    }
    render() {
        return (
            <input className="form-control search-input"
            type="text"
            placeholder="Search in movies..."
            onChange={this.onUpdateSearching}
            ></input>
        )
    }
}
