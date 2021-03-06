const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

app.use("/mentor", require("./routes/mentor"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
