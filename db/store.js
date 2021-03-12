const util = require('util');
const fs = require('fs');

//this package will be used to generate a unique id 
const { v1: uuidv1, v5 } = require('uuid');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//create out class

class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }

    //create a function to getNotes
    getNotes() {
        console.log("get notes")
        return this.read()
            .then((notes) => {
                let parsedNotes = JSON.parse(notes);
                console.log(parsedNotes);
                return parsedNotes;
            })
    }
    addNotes(newNote) {
        return this.getNotes().then(notes => {
            const newNoteList = [...notes, newNote]; // Creates a new array with the memebers of the array notes and adds newNote to the end
            console.log("add notes-get notes", newNoteList);

            // const ret = this.write(newNoteList);
            // console.log("return value:", ret);
            return this.write(newNoteList)
                .then(() => newNoteList);
        })
            .catch(err => console.error(err));
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