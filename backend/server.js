const express = require('express');
const API_PORT = 3001;
const bodyParser = require("body-parser");
const logger = require('morgan');
const mongoose = require("mongoose");
const apiRoutes = require('./api/routes/appointments');
var cors = require('cors');
const dbRoute = require("./config/keys").mongoURI;


mongoose 
  .connect(dbRoute, { useNewUrlParser: true })
  .then(() => console.log("Connect to MongoDB successfully!"))
  .catch(err => console.log(err));

var app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger("dev"));
app.use('/api', apiRoutes);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));