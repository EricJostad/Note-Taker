// Setting up all required modules
const noteData = require('../db/db.json');
const path = require('path');
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');

require('./html-routes');

module.exports = function (app) {

    fs.readFile('db/db.json', 'utf8', function (err, data) {
        if (err) throw err;

        let notes = JSON.parse(data);

        app.get('/api/notes', function (req, res) {
            res.json(notes);
        })

        app.post('/api/notes', function (req, res) {

            const activeNote = {
                title: req.body.title,
                text: req.body.text,
                id: generateUniqueId({
                    length: 10,
                    useLetters: true,
                    useNumbers: true
                })
            };
            notes.push(activeNote);
            updateNotes(notes);
            res.json(notes);
        })

        app.get('/api/notes/:id', function (req, res) {
            res.json(notes[req.params.id]);
        })

        app.delete('/api/notes/:id', function (req, res) {
            notes.splice(req.params.id, 1);
            updateNotes(notes);
            res.json(notes);
        })
    })

    // update json file when notes are added or deleted
    function updateNotes(notes) {
        fs.writeFile('db/db.json', JSON.stringify(notes, '\t'), err => {
            if (err) throw err;
            return true;
        });
    }
}