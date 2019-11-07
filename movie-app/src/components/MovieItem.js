import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MovieItem extends React.Component {
    constructor(){
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(e) {
        console.log("Delete clicked");
        axios.delete("http://localhost:5000/api/movies/" + this.props.movie._id)
        .then()
        .catch();
    }

    render() {
        return (
            <div style={{width: "40rem", margin: "auto"}}>
                <Card style={{ width: '10rem', float:"left"}}>
                    <Card.Img variant="top" src={this.props.movie.Poster} />
                    <Card.Body>
                        <Card.Title>{this.props.movie.Title}</Card.Title>
                        <Card.Text>
                            {this.props.movie.Year}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                    <Link to={"/edit/" + this.props.movie._id } className="btn btn-primary">Edit</Link>
                </Card>
            </div>

        )
    }
}

export default MovieItem;
