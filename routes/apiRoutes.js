const router = require('express').Router();
const store = require('../db/store');
const path = require('path');

    router.get('/notes', (req, res) => {
        console.log('get /notes')
        store
            .getNotes()
            .then((notes) => {
                console.log("store-get-notes:", notes);
                return res.json(notes);
            })
            .catch((err) => res.status(500).json(err))
    });

    router.post('/notes', (req, res) => {
        store
            .addNotes(req.body)
            .then((notes) => {
                console.log("store.addNotes:", notes)
                return res.json(notes) 
            })
            .catch((err) => res.status(500).json(err))
    });

    router.delete('/notes/:id', (req, res) => {
        store  
            .removeNote()
            .then((notes) => {
                return res.json(notes)
            })

        console.log("req id:", req.body.id)
    })

    
 module.exports = router;

















// //import items needed


// const router = require('express').Router();
// // const store = require('../db/store');


// router.get('/publiuc/notes', (req, res) => {
//     res.send({ data: "here is your api data"});
// });
// // make a GET request with all notes from the data base

// // router.get('/', (req, res) => {
// //     store
// //     .getNotes()
// //     .then((notes) => {
// //         return res.json(notes);
// //     })
//     .catch((err) => res.status(500).json(err))
// });

// router.post('./notes', (req, res) => {
//     store
//     .write(notes)
//     .then((notes) => {
//         return res.json(notes)
//     })

// })

//create a post request 

//create a delete request 
