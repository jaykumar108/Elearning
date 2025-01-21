const express = require("express");
const mongoose = require('mongoose');
const app = express();
const path = require("path");


main()
.then((res)=>{
    console.log("Connected to DataBase");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/RegisterUser');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(express.static(path.join(__dirname, 'VIEWS')));
app.use(express.static(path.join(__dirname, 'Public')));

app.get("/", (req, res)=>{
  res.send("App Is working");
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, 'VIEWS', 'E-learning.html'));
});

const port = 8080;

app.listen(port, (req, res)=>{
    console.log("App is listening", port);
})