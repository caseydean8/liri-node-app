var axios = require("axios");

// Movie constructor
var Movie = function() {

    var divider = "\n------------------------------------------------------------\n\n";

    this.findMovie = function(film) {
        var url = "http://www.omdbapi.com/?apikey=trilogy&t=" + film;
        axios.get(url).then(function(response) {
            var jsonData = response.data;
            var movieData = [
                `\n`,
                `Title: ${jsonData.Title}`,
                `Released: ${jsonData.Year}`,
                `IMDB rating: ${jsonData.Ratings[0].Value}`,
                `Rotten Tomatoes: ${jsonData.Ratings[1].Value}`,
                `Country: ${jsonData.Country}`,
                `Language: ${jsonData.Language}`,
                `Plot: ${jsonData.Plot}`,
                `Actors: ${jsonData.Actors}`,
                `\n`
            ].join("\n\n");
            console.log(movieData);
        })
    }

}

module.exports = Movie;