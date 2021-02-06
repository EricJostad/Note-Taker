// Setting up required dependencies
const path = require('path');

module.exports = function (app) {
    
    // These lines route the user to the needed html file based on url
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

    app.get('/notes', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/notes.html'));
    });
}