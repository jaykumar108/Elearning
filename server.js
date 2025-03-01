const express = require("express");
const mongoose = require('mongoose');
const app = express();
const path = require("path");


main()
.then((res)=>{
    console.log("Connected to DataBase");
})
.catch(err => console.log(err));


// ✅ MongoDB Connection (Using Atlas) - Hardcoded Connection String
require('dotenv').config();  // ✅ Load environment variables FIRST


// ✅ MongoDB Connection (Using Atlas)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Failed:", err));

const PORT = process.env.PORT || 5000;  // ✅ Set a default port value




app.use(express.static(path.join(__dirname, 'VIEWS')));
app.use(express.static(path.join(__dirname, 'Public')));

app.get("/", (req, res)=>{
  res.send("App Is working");
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, 'VIEWS', 'E-learning.html'));
});

const port = 5000;

app.listen(port, (req, res)=>{
    console.log("App is listening", port);
})