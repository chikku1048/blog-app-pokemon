const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://shikha:shikha123@cluster0.wnx6f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI)
  .then(() => {
    console.log("MongoDB successfully connected");
  })
  .catch((error) => {
    console.error("MongoDB error while connecting :", error.message);
  });

module.exports = mongoose.connection;