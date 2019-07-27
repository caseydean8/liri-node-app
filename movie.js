var axios = require("axios");

// Movie constructor
var Movie = function() {

    var divider = "\n------------------------------------------------------------\n\n";

    this.findMovie = function(film) {
        var url = "http://www.omdbapi.com/?apikey=trilogy&t=" + film;
        axios.get(url).then(function(response) {
            var jsonData = response.data;
            console.log(jsonData);
        })
    }

}

module.exports = Movie;