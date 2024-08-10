// server.js

require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'car_dealing_system'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

