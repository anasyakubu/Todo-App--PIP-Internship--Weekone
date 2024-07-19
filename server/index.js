const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routers/task.routes");
const config = require("./config.js");

dotenv.config();

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(cors());

// Create corsOptions object with your desired configuration
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"], // Set the allowed origin
  methods: "GET,POST,DELETE,PUT", // Set the allowed HTTP methods
  optionsSuccessStatus: 200, // Set the status code for successful preflight requests
};

// Pass corsOptions to the CORS middleware
app.use(cors(corsOptions));

// Middleware to log requests
app.use((req, res, next) => {
  // console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api/task", router);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
