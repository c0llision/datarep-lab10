import React from 'react';
import axios from 'axios';

class Edit extends React.Component {
    componentDidMount(){
        let movieId = this.props.match.params.id;
        axios.get('http://localhost:5000/api/movies/' + movieId)
        .then( (resp)=>{
            this.setState({
                _id: resp.data._id,
                movieTitle: resp.data.Title,
                movieYear: resp.data.Year,
                moviePosterUrl: resp.data.Poster
            });
        });
    }

    constructor(props) {
        super(props);
        this.state = { movieTitle: '',
            movieYear: '',
            moviePosterUrl: '',
            _id: ''
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

        const newMovie = {
            Title: this.state.movieTitle,
            Year: this.state.movieYear,
            Poster: this.state.moviePosterUrl,

        }

        axios.put('http://localhost:5000/api/movies/'  + this.state._id,
            newMovie
        )
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
                        Movie Name:
                        <input className='form-control' type="text" value={this.state.movieTitle} onChange={this.handleTitle} />
                    </label>
                    <br />
                    <label>
                        Release Year:
                        <input className='form-control' type="text" value={this.state.movieYear} onChange={this.handleYear} />
                    </label>
                    <br />
                    <label>
                        Poster Url:
                        <textarea className='form-control' type="text" value={this.state.moviePosterUrl} onChange={this.handlePoster} />
                    </label>
                    <br />
                    <input type="submit" value="Update movie" />
                </form>
            </div>
        );
    }
}

export default Edit;
