import React, {Component} from 'react';
import MazeService from '../../services/MazeService';
// import {getShows} from '../../services/GetShows';
// import MovieListItem from '../movie-list-item/movie-list-item';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './movie-list.css';
import MovieListItem from '../movie-list-item/movie-list-item';

export default class MovieList extends Component {
    state = {
        movieList: [],
        loading: true,
        error: false,
        term: '',
        filter: 'all'
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

    onToggleFavorite = (id) => {
        this.setState(({movieList}) => {
                const index = movieList.findIndex(elem => elem.id === id);
                const old = movieList[index];
                const newItem = {...old, favorite: !old.favorite};
                const newArr = [...movieList.slice(0, index), newItem, ...movieList.slice(index + 1)];
                return {
                    movieList: newArr
                }
        })
    }

    onToggleLiked = (id) => {
        this.setState(({movieList}) => {
            console.log(id.target);
            const index = movieList.findIndex(elem => elem.id === id);
            const old = movieList[index];
            const newItem = {...old, liked: !old.liked};
            const newArr = [...movieList.slice(0, index), newItem, ...movieList.slice(index + 1)];
            return {
                movieList: newArr
            }
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    filterPost = (items, filter) => {
        if (filter === 'liked') {
            return items.filter(el => el.liked)
        } else {
            return items;
        }
    }

    render() {
        console.log('rendering');

        const items = this.state.movieList.map(el => {
            const {...itemProps} = el;
            return (
                <li key={el.id} className="list-group-item">
                  <MovieListItem {...itemProps}
                  onToggleFavorite={this.onToggleFavorite}
                  onToggleLiked={this.onToggleLiked}
                  />
                </li>
            )
        })

        const {movieList, loading, error, term, filter} = this.state;
        const liked = movieList.filter(el => el.liked).length;
        const allPosts = movieList.length;
        const visiblePosts = this.filterPost(movieList, filter);

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


// onToggleImportant = (id) => {
//     this.setState(({data}) => {
//         const index = data.findIndex(elem => elem.id === id);
//         const old = data[index];
//         const newItem = {...old, important: !old.important};
//         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
//         return {
//             data: newArr
//         }
//     })
// }
// onToggleLiked = (id) => {
//     this.setState(({data}) => {
//         const index = data.findIndex(elem => elem.id === id);
//         const old = data[index];
//         const newItem = {...old, like: !old.like};
//         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
//         return {
//             data: newArr
//         }
//     })
// }

// addItem = (body) => {
//     const newItem = {
//         label: body,
//         important: false,
//         id: Date.now() + Math.random(0.5)
//     }
//     this.setState(({data}) => {
//         const newArr = [...data, newItem];
//         return {
//             data: newArr,
//         }
//     })
// }

// searchPost = (items, term) => {
//     if (term.length === 0) {
//         return items
//     } 

//     return items.filter((item) => {
//         return item.label.indexOf(term) > -1
//     });
// }

// filterPost = (items, filter) => {
//     if (filter === 'like') {
//         return items.filter(el => el.like)
//     } else {
//         return items;
//     }
// }

// onUpdateSearch = (term) => {
//     this.setState({term})
// }

// onFilterSelect = (filter) => {
//     this.setState({filter})
// }

// render() {
//     const {data, term, filter} = this.state;
//     const liked = data.filter(el => el.like).length;
//     const allPosts = data.length;
//     const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
//     return (
//         <div className="app">
//             <AppHeader
//             liked={liked}
//             allPosts={allPosts}/>
//             <div className="search-panel d-flex">
//                 <SearchPanel
//                 onUpdateSearch={this.onUpdateSearch}
//                 />
//                 <PostStatusFilter
//                 filter={filter}
//                 onFilterSelect={this.onFilterSelect}
//                 />
//             </div>
//             <PostList posts={visiblePosts}
//             onDelete={this.deleteItem}
//             onToggleImportant={this.onToggleImportant}
//             onToggleLiked={this.onToggleLiked}
//             />
//             <PostAddForm
//             onAdd={this.addItem}
//             />
//         </div>
//     )
// }    