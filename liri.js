require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var Band = require("./band");

let band = new Band();

var Song = require("./song");

var song = new Song();

var Movie = require("./movie");

var movie = new Movie();

var command = process.argv[2];

var searchTerm = process.argv.slice(3).join(" ");

var runIt = function() {
    if (command === "concert-this") {
    console.log("Searching for concert");
    band.findBand(searchTerm)
    }

    if (command === "spotify-this-song") {
    if (searchTerm){
    // console.log(searchTerm);
    console.log("Searching for song");
    song.findSong(searchTerm);
    }
    else {
    song.findSong("the sign ace of base");
    }
    }

    if (command === "movie") {
    if (searchTerm) {
    console.log("Searching for movie");
    movie.findMovie(searchTerm);
    }
    else {
    movie.findMovie("mr nobody")
    }
    }

    if (command === "do-what-it-says") {
        runTextFile();
        }
        
        function runTextFile(){
            fs.readFile("random.txt", "UTF-8", function(error, data){
                if (error){
                    console.log(error);
                }
                    // console.log(data);
                else {
                    var textSplit = data.split(" ");
                    command = textSplit[0];
                    searchTerm = textSplit.slice(1).join(" ");
                    runIt();
                }
            });
            
        };
}

runIt();

