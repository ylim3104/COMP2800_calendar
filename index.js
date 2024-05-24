require("./utils.js");
require("dotenv").config();
const port = process.env.PORT || 2004;
const { registerLicense } = require("@syncfusion/ej2-base");

/**
 * Imported Modules
 */
const url = require("url");
const express = require("express");
const app = express();
const licenseKey = process.env.ESSENTIAL_STUDIO_KEY;
registerLicense("licenseKey");

app.use(express.static(__dirname + "/public")); // Serve static files from the "public" directory

app.use(express.urlencoded({ extended: false })); // To parse URL-encoded bodies

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

// const eventSchema = new mongoose.Schema({
//   Id: Number,
//   Subject: String,
//   StartTime: Date,
//   EndTime: Date,
//   IsAllDay: Boolean,
//   CategoryColor: String,
// });

// const Event = mongoose.model("Event", eventSchema);

// app.use(cors());

// app.get("/events", async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.json(events);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

app.set("view engine", "ejs");


app.listen(port, () => {
  console.log("Node application listening on port " + port);
});