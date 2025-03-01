require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Debugging log to check MONGO_URI
console.log("MongoDB URI:", process.env.MONGO_URI);

async function main() {
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is not defined in the environment variables.");
    }
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
}

main().catch(err => console.error("MongoDB Connection Error:", err));

app.use(express.static(path.join(__dirname, "VIEWS")));
app.use(express.static(path.join(__dirname, "Public")));

app.get("/", (req, res) => {
    res.send("App Is working");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "VIEWS", "E-learning.html"));
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
