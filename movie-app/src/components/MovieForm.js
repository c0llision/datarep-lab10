import React from 'react';
import axios from 'axios';

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movieTitle: '',
            movieYear: '',
            moviePosterUrl: ''
        };

        this.handleTitle = this.handleTitle.bind(this);
        this.handleYear = this.handleYear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePoster = this.handlePoster.bind(this);
    }

    handleTitle(event) {
        this.setState({movieTitle: event.target.value});
    }

    handleYear(event) {
        this.setState({movieYear: event.target.value});
    }

    handlePoster(event) {
        this.setState({moviePosterUrl: event.target.value});
    }

    handleSubmit(event) {
        alert('A movie was submitted: Name: ' + this.state.movieTitle +
            " Year: " + this.state.movieYear + " Poster: " + this.state.moviePosterUrl);

        console.log('A movie was submitted: Name: ' + this.state.movieTitle + " Year: " +
            this.state.movieYear + " Poster: " + this.state.moviePosterUrl);

        this.setState({ movieTitle: '',
            movieYear: '',
            moviePosterUrl: ''
        });

        axios.post('http://localhost:5000/api/movies', {
            title: this.state.movieTitle,
            year: this.state.movieYear,
            poster: this.state.moviePosterUrl
        })
        .then()
        .catch();

        event.preventDefault();
    }

    render() {
        return (
            <div className="form-group">
                <br />
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Add Movie Name:
                        <input className='form-control' type="text" value={this.state.movieTitle} onChange={this.handleTitle} />
                    </label>
                    <br />
                    <label>
                        Add Release Year:
                        <input className='form-control' type="text" value={this.state.movieYear} onChange={this.handleYear} />
                    </label>
                    <br />
                    <label>
                        Add Poster Url:
                        <textarea className='form-control' type="text" value={this.state.moviePosterUrl} onChange={this.handlePoster} />
                    </label>
                    <br />
                    <input type="submit" value="Add movie" />
                </form>
            </div>
        );
    }
}

export default MovieForm;
