class MazeService {

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            console.log(`Could not fetch ${url}, status: ${res.status}. Moving to the next one...`)
            // throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAllMovies = async () => {
        let moviesArr = [];
        for (let i = 1; i < 17; i++) {
            const res = await this.getResource(`https://api.tvmaze.com/shows/${i}`)
            moviesArr.push(res);
        }
        return moviesArr.map(this._transfromMovie);
    }

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