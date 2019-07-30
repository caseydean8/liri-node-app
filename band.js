const axios = require("axios");

const moment = require("moment");

const fs = require("fs");

// Create Band constructor, use es6 if possible
const Band = function() {
    // Add divider for text file.
    const divider = "\n------------------------------------------------------------\n\n";

    this.findBand = function(artist) {
        let url = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;
        axios.get(url).then(function(response) {
            
            let jsonData = response.data[0];

            let concertData = [
                `\n`,
                `Venue: ${jsonData.venue.name}`,
                `City: ${jsonData.venue.city}`,
                `Date: ${moment(jsonData.datetime).format("MMMM Do YYYY")}`,
                `\n`
            ].join("\n\n");

            // Append concertData and the divider to log.txt, print concertData to the console

            fs.appendFile("log.txt", concertData + divider, function(err) {
                if (err) throw err;
            });
            
            console.log(concertData);

        });
    };
};

module.exports = Band;