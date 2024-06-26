const mongoose = require("mongoose");
const Courses = require("./schemas/courses");
const Events = require("./schemas/events");
require("dotenv").config();

const mongodb_host = process.env.MONGODB_HOST;
const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;


// Connection URI
const uri = `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");

    // Delete all collections
    return mongoose.connection.db.dropDatabase();
  })
  .then(async () => {
    console.log("All collections deleted");

    // Insert default data
    const defaultCourses = require("./defaultData/courses.json");
    const defaultEvents = require("./defaultData/events.json");
    await Courses.insertMany(defaultCourses);
    await Events.insertMany(defaultEvents);
    return true;
  })
  .then(() => {
    console.log("Default data inserted");
    mongoose.connection.close(); // Close the connection
  })
  .catch((error) => {
    console.error("Error resetting database:", error);
  });
