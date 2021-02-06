// Setting up all required modules
const noteData = require('../db/db.json');
const path = require('path');
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');

require('./html-routes');

module.exports = function (app) {

    // This sets the creation of the notes variable
    fs.readFile('db/db.json', 'utf8', function (err, data) {
        if (err) throw err;

        const notes = JSON.parse(data);

        // This will get the route for /api/notes
        app.get('/api/notes', function (req, res) {
            res.json(notes);
        })

        // This will set the post route for /api/notes
        app.post('/api/notes', function (req, res) {

            const currentNote = {
                title: req.body.title,
                text: req.body.text,
                id: generateUniqueId({
                    length: 7,
                    useLetters: true,
                    useNumbers: true
                })
            };
            notes.push(currentNote);
            updateNotes(notes);
            res.json(notes);
        })

        // This will get note with unique ID
        app.get('/api/notes/:id', function (req, res) {
            res.json(notes[req.params.id]);
        })

        // This will delete a note with unique ID
        app.delete('/api/notes/:id', function (req, res) {
            notes.splice(req.params.id, 1);
            updateNotes(notes);
            res.json(notes);
        })
    })

    // This will update json file when notes are added or deleted
    function updateNotes(notes) {
        fs.writeFile('db/db.json', JSON.stringify(notes, '\t'), err => {
            if (err) throw err;
            return true;
        });
    }
}