// console.log("band.js loaded")

var axios = require("axios");

// Create Band constructor, use es6 if possible
var Band = function() {
    // Add divider for text file.
    var divider = "\n------------------------------------------------------------\n\n";

    this.findBand = function(artist) {
        var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(url).then(function(response) {
            
            var jsonData = response.data;
            
            console.log(jsonData)
        })
    }
}

module.exports = Band;