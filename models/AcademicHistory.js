const mongoose = require("mongoose");

const academicHistorySchema = new mongoose.Schema(
  {
    qualification: {
      type: String,
      required: [true, "Please provide a qualification"],
      trim: true,
    },
    institute: {
      type: String,
      required: [true, "Please provide a institute name"],
      trim: true,
    },
    yearOfPassing: {
      type: Number,
      required: [true, "Please provide a year of passing"],
    },
    score: {
      type: Number,
      required: [true, "Please provide a score"],
    },
  },
  { timestamps: true }
);

const AcademicHistory = mongoose.model(
  "AcademicHistory",
  academicHistorySchema
);

module.exports = AcademicHistory;
