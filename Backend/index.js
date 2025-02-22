const express = require("express");
const cors = require("cors");
const BlogModel = require("./model");
require("./connection");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here

//Write your POST API here

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.post("/add", async (req, res) => {
  try {
    let data = req.body;
    let newBlog = new BlogModel(data);
    await newBlog.save();
    res.send("Data added successfully");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
