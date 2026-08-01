const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

const url = process.env.MONGO_URL || "mongodb://mongodb:27017";
const client = new MongoClient(url);

let db;

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        db = client.db("devops_project");
    } catch (error) {
        console.error(error);
    }
}

connectDB();

app.get("/", async (req, res) => {

    if (db) {
        await db.collection("visitors").insertOne({
            date: new Date()
        });
    }

    res.json({
        message: "Hello from Docker Compose!",
        author: "Muhammad Abdurrauf",
        database: db ? "Connected" : "Not Connected"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
