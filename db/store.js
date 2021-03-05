const util = require('util');

//this package will be used to generate a unique id 
const uuidv1 = require('uuidv');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//create out class

class Store {
    read(){
        return readFileAsync('db/db.json', 'utf8')
    }

    write(note) {
        return this.write('db/db.json', JSON.stringify(note))
    }

    //create a function to getNotes

    //create a function to addNotes

    //create a function to removeNotes **by id** YOU CANNOT DO THIS WITHOUT GETTING UUIDV1 TO WORK


}

//export new stroe

module.exports = new Store();