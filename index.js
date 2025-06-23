const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

// Creating express app
const app = express();

// Middlewares
app.use(express.json());