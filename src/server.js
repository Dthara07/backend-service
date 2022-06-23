const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('../config/db');

connectDB();
const app = express();

// Process application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// Process application/json
app.use(express.json());

app.use('/api/test', require('./routes/testCrudOp'));

app.listen(port, () => console.log(`Server started on port  ${port}`));
