'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');


describe('Notes creation works well', function() {
    it('assigns author and creates note based on constructor arguments', function() {
        var firstNewNote = new Note("This is a new note", "Bayo")
        var noteapp = new NotesApplication("Adebayo")
        noteapp.createNote(firstNewNote)
        assert(firstNewNote.author == "Bayo")
        assert(firstNewNote.content == "This is a new note")

    });

});

describe("Notes application increments number of notes as notes are added, and finds a note when get method is used, and the list method works fine", function() {    
/*        firstNewNote = new Note("This is a new note", "Bayo")
        secondNewNote = new Note("This is a new note", "Bayo")
        thirdNewNote = new Note("This is a new note", "Bayo")
        noteapp = new NotesApplication("Adebayo")
        var wrongIdMessage = "You have entered a wrong ID."*/
       
    it("increments the note list as notes are added", function() {
        var firstNewNote = new Note("This is a new note", "Bayo")
        var secondNewNote = new Note("This is a new note", "Bayo")
        var thirdNewNote = new Note("This is a new note", "Bayo")
        var noteapp = new NotesApplication("Adebayo")
        var wrongIdMessage = "You have entered a wrong ID."
        assert(noteapp.notes.length === 0)
        noteapp.notes(firstNewNote)
        noteapp.notes(secondNewNote)
        noteapp.notes(thirdNewNote)
        assert(noteapp.notes.length ===3)
    });

    it("ensures that a note is actually found when using the get method", function() {
        var firstNewNote = new Note("This is a new note", "Bayo")
        var secondNewNote = new Note("This is a new note", "Bayo")
        var thirdNewNote = new Note("This is a new note", "Bayo")
        var noteapp = new NotesApplication("Adebayo")
        var wrongIdMessage = "You have entered a wrong ID."
        noteapp.notes(firstNewNote)
        noteapp.notes(secondNewNote)
        noteapp.notes(thirdNewNote)
        assert(noteapp.notes.length ==3)
        assert(noteapp.get(noteapp.notes[2] !== wrongIdMessage))
    });

    it("ensures that list of notes is returned when the list function is called", function() {
        var firstNewNote = new Note("This is a new note", "Bayo")
        var secondNewNote = new Note("This is a new note", "Bayo")
        var thirdNewNote = new Note("This is a new note", "Bayo")
        var noteapp = new NotesApplication("Adebayo")
        var wrongIdMessage = "You have entered a wrong ID."
        noteapp.notes(firstNewNote)
        noteapp.notes(secondNewNote)
        noteapp.notes(thirdNewNote)
        assert(noteapp.listNotes()!== [])
    });

});

describe("Delete functionality works fine", function() {
/*        firstNewNote = new Note("This is a new note", "Bayo")
        secondNewNote = new Note("This is a new note", "Bayo")
        thirdNewNote = new Note("This is a new note", "Bayo")
        noteapp = new NotesApplication("Adebayo")
        var deleteErrorMessage = "You are trying to delete a note that does not exist.";*/
    it("deletes a note from the record", function() {
        var firstNewNote = new Note("This is a new note", "Bayo")
        var secondNewNote = new Note("This is a new note", "Bayo")
        var thirdNewNote = new Note("This is a new note", "Bayo")
        var noteapp = new NotesApplication("Adebayo")
        var deleteErrorMessage = "You are trying to delete a note that does not exist."
        assert(noteapp.delete(2) !== deleteErrorMessage)

});

});

