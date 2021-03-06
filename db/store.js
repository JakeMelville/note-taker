const util = require('util');
const fs = require('fs');

//this package will be used to generate a unique id 
const { v1: uuidv1 } = require('uuid');;


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//create out class

class Store {
    constructor() {
        this.idNote = 0;
    }
    read(){
        return readFileAsync('db/db.json', 'utf8')
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }

    //create a function to getNotes
    getNotes() {
        return this.read()
        .then(notes => {
            let notesArr;
            try {
                notesArray = [].concat(JSON.parse(notes));
            }
            catch (err) {
                notesArray = [];
            }
            return notesArray;
        })
    }
    addNotes(note) {
        console.log("add notes");
        const title = note;
        const name = note;
        const newNote = { title, text, id: ++this.idNote }
        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updateNotes => this.write(updateNotes))
            .then(() => newNote)

    }
    removeNote(id) {
        console.log("remove notes");
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== parseInt(id)))
            .then(updatedNotes => this.write(updatedNotes))
    }
    //create a function to addNotes

    //create a function to removeNotes **by id** YOU CANNOT DO THIS WITHOUT GETTING UUIDV1 TO WORK


}

//export new stroe

module.exports = new Store();