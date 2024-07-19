const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routers/messageRouter.js");
const config = require("./config.js");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Middleware to log requests
app.use((req, res, next) => {
  // console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api/messages", router);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
