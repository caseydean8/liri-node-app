const axios = require("axios");
const fs = require("fs")

// Movie constructor
const Movie = function() {

    const divider = "\n------------------------------------------------------------\n\n";

    this.findMovie = function(film) {
        let url = `http://www.omdbapi.com/?apikey=trilogy&t=${film}`;
        axios.get(url).then(function(response) {

            let jsonData = response.data;

            let movieData = [
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
            // Append movieData and the divider to log.txt, print movieData to the console
            fs.appendFile("log.txt", movieData + divider, function(err) {
                if (err) throw err;
            });
            console.log(movieData);
        });
    };
};

module.exports = Movie;