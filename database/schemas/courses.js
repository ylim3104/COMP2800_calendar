const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  Id: Number,
  Subject: String,
  StartTime: Date,
  EndTime: Date,
  RecurrenceRule: String,
  CategoryColor: String,
  ProjectId: Number,
  TaskId: Number
});

const CoursesModel = mongoose.model("courses", coursesSchema);

module.exports = CoursesModel;
