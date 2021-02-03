const noteData = requrie('../db/db.json');

module.exports = function (app) {

    app.get('/api/notes', function (req, res) {
        res.json(db.json);
    })
}