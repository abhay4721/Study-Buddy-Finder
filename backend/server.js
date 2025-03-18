require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

// ✅ Initialize Express App First!
const app = express();

app.use(express.json()); // ✅ Allows reading JSON request body
app.use(cors()); // ✅ Enables CORS

// ✅ Connect to MongoDB
connectDB();

// ✅ Load Authentication Routes
app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("Study Buddy Finder API Running...");
});

// ✅ Debug: Print Loaded Routes (AFTER declaring `app`)
console.log("Loaded Routes:");
console.log(app._router.stack.map((r) => r.route && r.route.path));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
