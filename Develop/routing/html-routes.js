const path = require('path');

module.exports = function (app) {
    
    app.get('/', function(req, res){
        res.sendFiles(path.join(__dirname + '/Develop/assets/html/index.html'));
    });

    app.get('/notes', function(req, res){
        res.sendFiles(path.join(__dirname + '/Develop/assets/html/notes.html'));
    });
}