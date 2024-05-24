const mongoose = require('mongoose');
const eventsSchema = new mongoose.Schema({
    Id: Number,
    Subject: String,
    StartTime: Date,
    EndTime: Date,
    CatagoryColor: String,
    ProjectId: Number,
    TaskId: Number
});

const eventModel = mongoose.model("event", eventsSchema);
module.exports = eventModel;