const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using parser to parse JSON bodies into JS objects
app.use(parser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining an endpoint to return all ads
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// starting the server
app.listen(3001, () => {
  console.log("listening on port 3001");
});
