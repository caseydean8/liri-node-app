require("dotenv").config();

var Band = require("./band")

var keys = require("./keys.js");

let band = new Band();

var command = process.argv[2];

var searchTerm = process.argv[3];

if (command === "concert-this") {
    console.log("Searching for concert");
    band.findBand(searchTerm)
}