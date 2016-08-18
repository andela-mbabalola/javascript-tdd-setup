// NotesApplication class

var Note = require('./notes.js');
module.exports = function NotesApplication() {
	this.notes = [];
	
	this.createNote = function(note) {
		if (note instanceof Note) this.notes.push(note);
	}

	this.get = function(note_id){
		if(!this.notes.hasOwnProperty(note_id)){
			console.log("You have entered a wrong ID.");
		}
			else console.log(note[i] + ': ' + note.content[i]);		
	}

	this.listNotes = function(){
		for(var i; i<this.notes.length; i++) {
			console.log("NOTE ID: " + i);
			console.log("[" + " "+ this.notes[i].content + " ]");
			console.log("By Author " + this.notes[i].author);
		}
	}


	this.search = function(search_text){
		console.log("Showing results for search 'search_text'");
		for(var i; i<this.notes.length; i++) {
			if (this.notes[i].content.indexOf(search_text) !== -1){
				console.log("Note ID: "+ i);
				console.log("[" + " "+ this.notes[i].content + " ]");
				console.log("By Author " + this.notes[i].author);
			}else continue;
		}
		console.log("No other records matched your search query");
	}

	this.delete = function(note_id){
		if(!this.notes.hasOwnProperty(note_id)){
			console.log("You are trying to delete a note that does not exist.");
		}
		this.notes.splice(note_id, 1);
	}

	this.edit = function(note_id, newContent) {
		this.notes[note_id].content = newContent;
	} 


}