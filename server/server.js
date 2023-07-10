require("dotenv").config();
const express=require('express');
const cors = require("cors");
const app=express();
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/db");

connectDB();
app.use(cors({ origin: true, credentials: true }));
const todo = require("./routes/todo");
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

app.use("/api/todo", todo);
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
