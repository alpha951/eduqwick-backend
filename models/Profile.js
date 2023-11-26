const mongoose = require("mongoose");
const { AcademicHistory } = require("./AcademicHistory");

const profileSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide a first name"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please provide a last name"],
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: [true, "Please provide a date of birth"],
    },
    address: {
      type: {
        city: String,
        state: String,
        country: String,
        pincode: String,
      },
      required: [true, "Please provide an address"],
    },
    academicHistory: {
      type: [AcademicHistory],
    },
    document: {
      type: String,
    },
    applications: {
      type: [String],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "userId can't be blank"],
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
