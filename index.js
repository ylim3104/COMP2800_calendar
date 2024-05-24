require("./utils.js");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 2000;
const { registerLicense } = require("@syncfusion/ej2-base");
const eventModel = require("./database/schemas/events.js");

/**
 * Imported Modules
 */
const url = require("url");
const express = require("express");
const app = express();
const licenseKey = process.env.ESSENTIAL_STUDIO_KEY;
registerLicense("licenseKey");


app.use(express.static(__dirname + "/public")); // Serve static files from the "public" directory
app.use(express.static(__dirname + "/database"));
app.use(express.urlencoded({ extended: false })); // To parse URL-encoded bodies

const mongodb_host = process.env.MONGODB_HOST;
const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/?retryWrites=true&w=majority&appName=Cluster0`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/", (req, res, next) => {
  app.locals.currentURL = url.parse(req.url).pathname;
  res.locals.licenseKey = licenseKey;
  next();
});

app.get("/", async (req, res) => {
    res.render("calendar", {
      ESSENTIAL_STUDIO_KEY: process.env.ESSENTIAL_STUDIO_KEY,
    });
});

app.get("/events", async (req, res) => {
  try {
    const events = await eventModel.find();
    res.json(events);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.set("view engine", "ejs");


app.listen(port, () => {
  console.log("Node application listening on port " + port);
});