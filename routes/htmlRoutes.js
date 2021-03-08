const router = require('express').Router();
const path = require('path');

module.exports = (router) => {
    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}

















// const express = require("express");
// const router = express.Router();

// router.get("/notes", (req, res) => {
//     console.log("htmlRoute")
//     res.end();
// });


// //bring in /notes route with the notes.html file
// router.get('/', (req, res) =>  {
//     res.sendFile(path.join(__dirname, '/public/notes.html'))
// })

// //create a permanent route to respond with the index.html file when anythig other route is hit

// router.get('*', (req, res) => {
//     res.send(path.join(__dirname, '/public/index.html'));
// }) //this needs to be last route on page 


// module.exports = router;