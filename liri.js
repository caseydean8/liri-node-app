require("dotenv").config();

var keys = require("./keys.js");

var Band = require("./band");

let band = new Band();

var Song = require("./song");

var song = new Song();

var command = process.argv[2];

var searchTerm = process.argv.slice(3).join(" ");

if (command === "concert-this") {
    console.log("Searching for concert");
    band.findBand(searchTerm)
}

if (command === "spotify-this-song") {
    console.log("Searching for song");
    song.findSong(searchTerm);
}