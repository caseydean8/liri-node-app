var Spotify = require('node-spotify-api');

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var Song = function() {
    var divider = "\n------------------------------------------------------------\n\n";

    this.findSong = function(song) {
        spotify.search({ 
            type: 'track', 
            query: song,
            limit: 1
        })
        .then(function(response) {
          var jsonData = response.tracks  
          console.log(jsonData);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
}

module.exports = Song;