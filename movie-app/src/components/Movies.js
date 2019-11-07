import React from 'react';
import MovieItem from './MovieItem';

class Movies extends React.Component {
    render() {
        return this.props.myMovies.map((movie) => {
            console.log(movie.Title);
            return <MovieItem key={movie.imdbID} movie={movie}></MovieItem>
        });
        /*return ( <h1>Hello from movies component</h1> );*/
    }
}

export default Movies;
