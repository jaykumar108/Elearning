const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;  // Use only one port

// Connect to MongoDB
async function main() {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
}

main()
    .then(() => console.log("Connected to DataBase"))
    .catch((err) => console.log(err));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "VIEWS")));
app.use(express.static(path.join(__dirname, "Public")));

// Routes
app.get("/", (req, res) => {
    res.send("App Is working");
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "VIEWS", "E-learning.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
