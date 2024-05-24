const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  Id: Number,
  Subject: String,
  StartTime: Date,
  EndTime: Date,
  RecurrenceRule: String,
  CategoryColor: String
});

const CoursesModel = mongoose.model("courses", coursesSchema);

module.exports = CoursesModel;
