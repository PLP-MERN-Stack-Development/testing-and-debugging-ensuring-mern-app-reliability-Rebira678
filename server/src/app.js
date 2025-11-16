const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bugRoutes = require("./routes/bugRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", bugRoutes);

// Only connect to MongoDB and start the server when NOT running tests.
// Jest sets NODE_ENV === 'test', so tests can import the app without starting the listener.
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 5000;
  mongoose
    .connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/mern-bug-tracker"
    )
    .then(() =>
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    )
    .catch((err) => console.error(err));
}

module.exports = app; // for testing
