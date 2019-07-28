# liri-node-app

Liri is a node.js application that allows the user to access Bandsintown, Spotify, and OMDB API information from the command line.

The command * node liri concert-this "insert artist name" * shows the venue name, location, and date of a performers next concert.

The command * node liri spotify-this-song "insert song title" * displays the artist, song title, a preview link to the song at spotify.com, and which album the song is from. If no song title is entered it responds with info for "The Sign".

The command * node liri "insert movie title" * displays the title, release year, Imdb and Rotten Tomatoes ratings, country, plot, and actors of the movie entered. If no movie title is entered it responds with info for "Mr. Nobody".

The command * node liri do-what-it-says * takes information from a text file and performs an API request, in this case "I want it that Way" on Spotify but it can perform the Bandsintown and OMDB API requests as well when the text is formatted correctly.

Liri is dependent on several node packages, including axios, dotenv, fs, moment, and node-spotify-api.

Video of Liri in use: https://drive.google.com/open?id=1LKTb1qtN6vuaCLKHd4dGMIuQt3pL1Hgk

Any questions or comments can be directed to caseydean8@gmail.com
