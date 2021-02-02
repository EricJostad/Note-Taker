const path = require('path');

module.exports = function (app) {
    
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + '/../assets/html/index.html'));
    });

    app.get('/notes', function(req, res){
        res.sendFile(path.join(__dirname + '/../assets/html/notes.html'));
    });
}