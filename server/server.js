
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "NEHOSA backend is running!"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    service: "NEHOSA API"
  });
});

// Pesapal checkout integration point. Keep this route disabled until the
// merchant account, credentials, IPN/callback URLs and payment verification are configured.
app.post("/api/donations/checkout", (req, res) => {
  res.status(503).json({
    status: "unavailable",
    provider: "Pesapal",
    message: "Online donations are not configured yet."
  });
});

app.listen(PORT, () => {
  console.log(`NEHOSA backend running at http://localhost:${PORT}`);
});
