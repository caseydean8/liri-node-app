const Spotify = require('node-spotify-api');

const keys = require("./keys.js");

let spotify = new Spotify(keys.spotify);

const Song = function() {
    const divider = "\n------------------------------------------------------------\n\n";

    this.findSong = function(song) {
        spotify.search({ 
            type: 'track', 
            query: song,
            limit: 1
        })
        .then(function(response) {
        // look at response for first term, in this case "tracks", to get inside response object.
          let jsonData = response.tracks.items[0]; 
          
          let songData = [
            `\n`,
            `Artist: ${jsonData.artists[0].name}`,
            `Song: ${jsonData.name}`,
            `Preview: ${jsonData.external_urls.spotify}`,
            `Album: ${jsonData.album.name}`,
            `\n`
          ].join("\n\n");
          console.log(songData);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
}

module.exports = Song;