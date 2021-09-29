class MazeService {
    getAllMovies = async () => {
        let moviesArr = [];
        for (let i = 1; i < 11; i++) {
            const res = await this.getResource(`https://api.tvmaze.com/shows/${i}`)
            moviesArr.push(res);
        }
        return moviesArr.map(this._transfromMovie);
    }

    // getOneMovie = async (id) => {
    //     const res = await this.getResource(`https://api.tvmaze.com/shows/${id}`);
    //     return res;
    // }
    
    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    // getAllCharacters = async () => {
    //     const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    //     return res.data.results.map(this._transfromCharacter);
    // }

    _transfromMovie = (movie) => {
        return {
                id: movie.id,
                name: movie.name,
                summary: movie.summary.replace(/(<.{0,2}>)/g, ""),
                language: movie.language,
                image: movie.image.medium,
                genres: movie.genres.join(', '),
                liked: false,
                favorite: false
        }
    }


}

export default MazeService;