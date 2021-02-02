// Setting up required dependencies
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 1170;

app.get('/', function (req, res) {
    res.send('Hello World!');
});



app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));