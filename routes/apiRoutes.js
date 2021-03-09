const router = require('express').Router();
const store = require('../db/store');
const path = require('path');


module.exports = (router) => {
    router.get('/api/notes', (req, res) => {
        store
            .getNotes()
            .then((notes) => {
                console.log("store-get-notes:", notes);
                return res.json(notes);
            })
            .catch((err) => res.status(500).json(err))
    });

    router.post('/api/notes', (req, res) => {
        store
            .addNotes(req.body)
            .then((notes) => {
                console.log("store.addNotes:", notes)
                return res.json(notes) 
            })
            .catch((err) => res.status(500).json(err))
    });
};

















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


// module.exports = router;