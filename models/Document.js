const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, "Please provide a document type"],
    },
    url: {
      type: String,
      required: [true, "Please provide a url"],
    },
  },
  { timestamps: true }
);

const Document = mongoose.model("Document", documentSchema);
module.exports = Document;
