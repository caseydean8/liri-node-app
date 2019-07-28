require("dotenv").config();

const fs = require("fs");

const keys = require("./keys.js");

const Band = require("./band");

let band = new Band();

const Song = require("./song");

let song = new Song();

const Movie = require("./movie");

let movie = new Movie();

let command = process.argv[2];

let searchTerm = process.argv.slice(3).join(" ");

const runIt = () => {
    if (command === "concert-this") {
    band.findBand(searchTerm)
    }

    if (command === "spotify-this-song") {
        (searchTerm) ? song.findSong(searchTerm) : song.findSong("the sign ace of base")
    }

    if (command === "movie") {
        (searchTerm) ? movie.findMovie(searchTerm) : movie.findMovie("mr nobody")
    }
    
    if (command === "do-what-it-says") {
        runTextFile();
    }
        
    function runTextFile(){
        fs.readFile("random.txt", "UTF-8", function(error, data){
            if (error){
                console.log(error);
            } else {
                let textSplit = data.split(" ");
                command = textSplit[0];
                searchTerm = textSplit.slice(1).join(" ");
                runIt();
            }
        });
    };
}

runIt();