// models/Job.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  position: String,
  company: String,
  location: String,
  workType: String,
  skills: [String],
  education: String,
  description: String,
  vacancies: Number,
  salary: String,
  expectedYear: Number,
  postedTime: Date,
});

module.exports = mongoose.model("Job", jobSchema);
