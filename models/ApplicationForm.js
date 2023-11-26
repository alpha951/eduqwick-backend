const mongoose = require("mongoose");

const applicationFormSchema = new mongoose.Schema(
  {
    college: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
    },
    year: {
      type: Number,
      required: true,
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
    },
  },
  { timestamps: true }
);

const ApplicationForm = mongoose.model(
  "ApplicationForm",
  applicationFormSchema
);

module.exports = ApplicationForm;
