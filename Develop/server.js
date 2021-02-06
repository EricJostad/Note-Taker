// Setting up required dependencies
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

// This creates the express app
const app = express();
const PORT = process.env.PORT || 1170;

// Setting up middleware to parse json file
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

require('./routing/api-routes')(app);
require('./routing/html-routes')(app);

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));