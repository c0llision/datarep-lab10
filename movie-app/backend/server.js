const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000

app.use(express.urlencoded())
app.use(express.json())
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

// Connect to mongodb
mongoose.connect('mongodb+srv://user:pLpy6uTQY2RFKNJt@cluster0-i1an0.mongodb.net/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected");
});

var movieSchema = new mongoose.Schema({
  Title: String,
  Year: Number,
  imdbID: String,
  Type: String,
  Poster: String
});

var Movie = mongoose.model('Movies', movieSchema);

/*
var movieInstance = new Movie({
  Title: "War of the Worlds",
  Year: "2005",
  imdbID: "tt0407304",
  Type: "movie",
  Poster: "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
})

movieInstance.save(function (err) {
  if (err) return handleError(err);
    console.log("saved!");
});
*/

// Routes
app.get('/', (req, res) => res.send('Welcome to Data Representation & Querying'))
app.get('/name/:name', (req, res) => res.send("Hello " + req.params.name))
app.post('/name', (req, res) => res.send("Hello " + req.body.name + " " + req.body.lastname))

app.get('/api/movies', (req, res) => {
    Movie.find({}, function (err, movies) {
        if (err) return handleError(err);
        res.json({movies: movies});
    })
})

app.post('/api/movies', (req, res) => {
    console.log("Title: " + req.body.title);
    console.log("Year: " + req.body.year);
    console.log("Poster: " + req.body.poster);

    Movie.create({
      Title: req.body.title,
      Year: req.body.year,
      imdbID: "tt1234",
      Type: "movie",
      Poster: req.body.poster
    });

    res.json("Data uploaded");
})

app.delete('/api/movies/:id', (req, res)=>{
    Movie.deleteOne({_id:req.params.id}, (err, data)=>{
        res.json(data);
    });
})

app.get('/api/movies/:id', (req, res) => {
    Movie.findById(req.params.id, function (err, movies) {
        res.json({movies: movies});
    })
})

app.use('/test',express.static('public/index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

