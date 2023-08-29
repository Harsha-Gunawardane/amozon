const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("./config/dbConn");
dotenv.config();

const PORT = process.env.PORT || 3500;

// connect mongodb database
connectDB();

// import custom middleware
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const credentials = require("./middleware/credentials");

// import custom files
const corsOptions = require("./config/corsOptions");

// custom middleware logger
app.use(logger);

// check credentials before cors
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// Middleware to parse JSON
app.use(bodyParser.json());

// serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

// routes
app.use("/", require("./routes/root"));
app.use("/products", require("./routes/products"));
app.use("/users", require("./routes/user"));

app.all("*", (req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB database");
  app.listen(PORT, () => {
    console.log("listening on port " + PORT);
  });
});
