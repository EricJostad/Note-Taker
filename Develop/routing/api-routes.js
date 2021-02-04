const noteData = require('../db/db.json');

module.exports = function (app) {

    app.get('/api/notes', function (req, res) {
        res.json(db.json);
    })

    app.post('/api/notes', function (req, res) {
        db.json.push(req.body);
    })
}