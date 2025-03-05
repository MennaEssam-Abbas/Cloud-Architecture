const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({path:"config.env"});
const dbConnection = require('./config/database');
const categoryRoute = require('./routes/categoryRoute');
dbConnection();

const app = express();
app.use(express.json());

app.use('/api/v1/categories', categoryRoute);

app.get('/', (req, res) => {
    res.send(' The First server is running');
  });

const PORT= process.env.PORT ;
  app.listen(PORT, () => {
    console.log(`The server is running on Port ${PORT}`);
  });