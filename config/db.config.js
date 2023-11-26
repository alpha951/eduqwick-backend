const mongoose = require("mongoose");

const { DB_URL } = require("./server-config");

const dbConnect = async () => {
  await mongoose.connect(DB_URL);
};

module.exports = {
  dbConnect,
};
