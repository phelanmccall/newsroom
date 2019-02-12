var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
const path = require('path');
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
var cors = require("cors");

// Require all models
var db = require("./models");

const PORT = process.env.PORT || 3001;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(bodyparser.urlencoded([{ extended: true}]));
app.use(express.json());
app.use(cors());
// Make public a static folder
app.use(express.static("public"));
app.use(express.static("../client/build"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/newsroom", { useNewUrlParser: true });

// Routes

// A GET route for scraping the echoJS website
app.get("/scrape", function(req, res) {
  // First, we grab the body of the html with axios
  axios.get("http://www.echojs.com/").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    // Now, we grab every h2 within an article tag, and do the following:
    $("article h2").each(function(i, element) {
      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

      // Create a new Article using the `result` object built from scraping
      db.Article.update({title: result.title}, result, {upsert: true})
        .then(function(dbArticle) {
          // View the added result in the console
          console.log(dbArticle);
        })
        .catch(function(err) {
          // If an error occurred, log it
          console.log(err);
        });
    });

    // Send a message to the client
    res.send("Scrape Complete");
  });
});

// Route for getting all Articles from the db
app.get("/articles", function(req, res) {
  // Grab every document in the Articles collection
  db.Article.find({})
    .then(function(dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


// Route for grabbing a specific Article by id, populate it with it's note
app.get("/article/", function(req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Note.find({ articleId: req.query.id })
    // ..and populate all of the notes associated with it
    .then(function(dbNotes) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      res.json(dbNotes);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route for saving/updating an Article's associated Note
app.post("/note", function(req, res) {
  // Create a new note and pass the req.body to the entry
  db.Note.create({
    body: req.body.note,
    articleId: req.body.id
  })
    .then(function(dbNote) {
      // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      res.json(dbNote);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

app.delete("/note", (req, res) => {
  db.Note.deleteOne({
    _id: req.body.id
  }).then(dbNote => {console.log("deleted " + dbNote), res.json(dbNote)}).catch(err => console.log(err.message));
})

app.get('/', function(req, res) {
  res.sendFile("../client/build/index.html");
}); 

// Start the server
app.listen(PORT, () => {
  console.log("App running on port " + PORT + "!");
});
