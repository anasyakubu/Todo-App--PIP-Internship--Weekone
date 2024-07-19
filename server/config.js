const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

db.getConnection()
  .then((connection) => {
    console.log("Connected to the database.");
    connection.release();
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });

const config = {
  db,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT || 9000,
};

module.exports = config;
