import React from 'react';
import Movies from './Movies';
import axios from 'axios';

class Read extends React.Component {
    state = {
        movies: [ ]
    };

    componentDidMount() {
        axios.get('http://localhost:5000/api/movies')
        .then(res => {
            this.setState({ movies: res.data.movies });
        }).catch((err) => {
            console.log(err);
        });

    }

    render() {
        return (
            <div className="App">
                <Movies myMovies={this.state.movies}></Movies>
            </div>
        );
    }
}

export default Read;
