// Setting up required dependencies
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 1170;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// This requires the server to route the user to the html index file 
require('./routing/html-routes')(app);

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));