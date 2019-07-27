// console.log("band.js loaded")

var axios = require("axios");

var moment = require("moment");

// Create Band constructor, use es6 if possible
var Band = function() {
    // Add divider for text file.
    var divider = "\n------------------------------------------------------------\n\n";

    this.findBand = function(artist) {
        var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(url).then(function(response) {
            
            var jsonData = response.data[0];

            var concertData = [
                `\n`,
                "Venue: " + jsonData.venue.name,
                "City: " + jsonData.venue.city,
                "Date: " + moment(jsonData.datetime).format("MMMM Do YYYY"),
                `\n`
            ].join("\n\n");
            
            console.log(concertData);
        })
    }
}

module.exports = Band;